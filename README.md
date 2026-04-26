
  # Sadusha Nilupul

  This is a code bundle for Personal Website. The original project is available at https://www.figma.com/design/v8W3vOB57XBz46C1IBaIlK/Personal-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

    ## Database setup (Supabase)

    1. Create a project in Supabase.
    2. Open the SQL editor and run the script in `supabase/schema.sql`.
    3. Copy `.env.example` to `.env.local` and set values:
      - `VITE_SUPABASE_URL`
      - `VITE_SUPABASE_ANON_KEY`
    4. Restart the dev server.

    The contact form in `src/components/Contact.tsx` now inserts records into the `contacts` table.
  