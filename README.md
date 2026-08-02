# Church Market

성당 온라인 장터 (Next.js + Supabase).

## Features

- Google / Kakao / Email(매직 링크) 로그인
- 물품 사진·카테고리·설명·가격 등록
- 카테고리별 장터 브라우즈 + Buy 거래
- 판매자·구매자·관리자 알림 (인앱 + 이메일 + 카카오 알림톡 어댑터)
- 관리자 드롭오프/픽업 처리 및 일·주·월·년·전체 통계
- 현장 현금 결제 (온라인 결제 없음)

## Setup

1. Copy `.env.example` → `.env.local` and fill keys.
2. In Supabase Dashboard → Authentication:
   - Site URL: `https://churchmarket.vercel.app`
   - Redirect URLs: `https://churchmarket.vercel.app/auth/callback`, `http://localhost:3000/auth/callback`
   - Enable Google, Kakao, Email providers
3. Admin account: sign in once with `olmchurchadmin@gmail.com` (auto-promoted to admin).
4. Optional: set `RESEND_API_KEY` and Solapi keys for email/알림톡.

```bash
npm install
npm run dev
```

## Deploy

GitHub `main` → Vercel. Production URL: https://churchmarket.vercel.app

## Supabase project

Connected project: `https://irwzindkohlrmasnymzp.supabase.co`
