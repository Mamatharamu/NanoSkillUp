# Nano SkillUp – Educational Platform

A production-oriented Next.js + TypeScript + Tailwind + Prisma starter for an educational/training website.

## Included
- Responsive homepage
- Course catalog
- Dynamic course detail pages
- Curriculum accordions
- Success stories
- Learning resources
- About page
- Contact/enquiry form
- Contact API route
- PostgreSQL + Prisma schema
- Seed data
- SEO-ready metadata
- Reusable components

## Run locally

```bash
npm inst
all
cp .env.example .env
# Update DATABASE_URL in .env
npx prisma generate
npm run db:push
npm run db:seed
npm run dev
```

Open http://localhost:3000

## Notes
Authentication, payments, email/WhatsApp integration, CMS administration, analytics and production database persistence can be added on top of the provided architecture.

## Suggested next steps
1. Add Auth.js for student/instructor/admin login.
2. Connect the contact API to Prisma and email.
3. Build `/admin` dashboard with role-based access.
4. Add a CMS or database-backed resource editor.
5. Add enrollment/payment provider.
6. Add automated unit, component and end-to-end tests.
