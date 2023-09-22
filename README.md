# YourBrand - Dashboard template for E-commerce

This is a Nextjs/Supabase template for future projects. It was made from the [usebasejump.com](https://usebasejump.com) repository. 

Here's the [diagram](https://app.eraser.io/workspace/WC6mGSiH7LmCes3NlmNd?origin=share) for the user flow.

## Installation and usage

Make sure to make the `.env` file with this variables

```bash
URL="http://localhost:3000"
NEXT_PUBLIC_SUPABASE_ANON_KEY="supabase-key"
NEXT_PUBLIC_SUPABASE_URL="supabase-url"
```
and then run

```bash
npm i
npm run dev
```

## Testing payments

For testing stripe cases, use the SECRET_STRIPE_KEY in the .env and try some of [these values](https://stripe.com/docs/testing)

## Typescript and generated types

We've implemented automatic type generation based off of your Supabase database config. You can learn more about this
setup [in the supabase docs on type generation](https://supabase.com/docs/guides/api/generating-types)

To update your types, run:

```bash
yarn generate-types
```

You can then reference them as

```javascript
import Database from '@/types/supabase-types';

const profile: Database['public']['Tables']['profiles']['Row'] = {name: 'John Doe'};
```

## Code Formatting and linting

The project is configured to use ESLint and Prettier. Prettier is run through ESLint, not on its own.

* Prettier: [Prettier ESLint Plugin](https://github.com/prettier/eslint-plugin-prettier)
* ESLint: [NextJS ESLint](https://nextjs.org/docs/basic-features/eslint)

## Internationalizatoin and translations

The project uses NextJS built in internationalization, and adds `next-translate` for translation support.

* [NextJS Internationalization](https://nextjs.org/docs/basic-features/i18n)
* [next-translate](https://github.com/aralroca/next-translate)

## Notes

- If there's an issue related with `window` in the build or development, just make sure to add a validation so there's no reference error. 
- [Diagram](https://app.eraser.io/workspace/WC6mGSiH7LmCes3NlmNd)
