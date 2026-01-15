'use client';

import { useEffect, useRef } from 'react';

interface WaveConfig {
    amplitude: number;
    frequency: number;
    phase: number;
    speed: number;
    opacity: number;
    strokeWidth: number;
    yOffset: number;
}

export default function FlowingWaveGraph() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Wave configurations - 4 overlapping waves
        const waves: WaveConfig[] = [
            { amplitude: 25, frequency: 0.008, phase: 0, speed: 0.015, opacity: 0.4, strokeWidth: 1.5, yOffset: 0 },
            { amplitude: 35, frequency: 0.006, phase: Math.PI * 0.5, speed: 0.012, opacity: 0.3, strokeWidth: 1.2, yOffset: 15 },
            { amplitude: 20, frequency: 0.01, phase: Math.PI, speed: 0.018, opacity: 0.25, strokeWidth: 1, yOffset: -10 },
            { amplitude: 30, frequency: 0.007, phase: Math.PI * 1.5, speed: 0.01, opacity: 0.2, strokeWidth: 0.8, yOffset: 25 },
        ];

        let time = 0;

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);
        };

        const drawWave = (wave: WaveConfig, width: number, height: number) => {
            const centerY = height * 0.5 + wave.yOffset;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`;
            ctx.lineWidth = wave.strokeWidth;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            for (let x = 0; x <= width; x++) {
                // Create smooth bezier-like wave using combined sine functions
                const y = centerY +
                    Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
                    Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.7) * wave.amplitude * 0.3;

                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.stroke();
        };

        const createFadeMask = (width: number, height: number) => {
            // Create horizontal fade gradient for edges
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient.addColorStop(0.15, 'rgba(0, 0, 0, 1)');
            gradient.addColorStop(0.85, 'rgba(0, 0, 0, 1)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            return gradient;
        };

        const animate = () => {
            const rect = canvas.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;

            // Clear canvas
            ctx.clearRect(0, 0, width, height);

            // Apply composite operation for edge fading
            ctx.save();
            ctx.globalCompositeOperation = 'source-over';

            // Draw all waves
            waves.forEach((wave) => {
                drawWave(wave, width, height);
            });

            // Apply edge fade using destination-in composite
            ctx.globalCompositeOperation = 'destination-in';
            const fadeGradient = createFadeMask(width, height);
            ctx.fillStyle = fadeGradient;
            ctx.fillRect(0, 0, width, height);

            ctx.restore();

            time += 1;
            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute bottom-0 left-0 right-0 w-full h-[45%] opacity-60 pointer-events-none"
            style={{
                maskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)',
            }}
        />
    );
}
