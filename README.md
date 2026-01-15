# Monetai

AI 기반 맞춤형 할인 마케팅 솔루션의 공식 랜딩 페이지입니다.

> **Predict non-paying users with AI and unlock hidden revenue with personalized offers.**

## 🎯 About Monetai

Monetai는 **결제 가능성이 낮은 유저만 타겟팅**하여 맞춤 할인을 제공하는 AI 마케팅 솔루션입니다.

### 핵심 가치

| Feature | Description |
|---------|-------------|
| **No Cannibalization** | 정가 구매 의사가 있는 유저는 건드리지 않습니다 |
| **Zero Setup** | SDK 설치 후 "Start"만 누르면 바로 시작 |
| **Performance Pricing** | 추가 매출 발생 시에만 비용 청구 |
| **A/B Testing** | 적용/미적용 그룹 비교로 ROI 투명하게 증명 |

### 작동 원리

1. **User Behavior Analysis** - 앱 내 행동 데이터 수집 및 유저 성향 파악
2. **Purchase Prediction** - ML 모델로 결제 가능성이 낮은 유저 예측
3. **Targeted Promotions** - 이탈 예상 유저에게만 맞춤 오퍼 제공

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://greensock.com/gsap/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Language**: TypeScript
- **i18n**: Custom React Context (한국어/English)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
app/
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Footer.tsx
│   └── FlowingWaveGraph.tsx
├── context/
│   └── LanguageContext.tsx   # i18n context
├── lib/
│   └── translations.ts       # KO/EN translations
├── layout.tsx
├── page.tsx
└── globals.css
```

## 🌐 Links

- **Website**: [monetai.io](https://monetai.io)
- **Dashboard**: [dashboard.monetai.io](https://dashboard.monetai.io)
- **Developer Docs**: [docs.monetai.io](https://docs.monetai.io)
- **Contact**: [calendly.com/monetai-jay](https://calendly.com/monetai-jay)

## 📄 License

© Monetai (Hayanmind Inc.). All rights reserved.
