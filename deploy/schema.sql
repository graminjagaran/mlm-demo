CREATE TABLE IF NOT EXISTS website_inquiries (
  id bigserial PRIMARY KEY,
  application_no text UNIQUE NOT NULL,
  full_name text NOT NULL,
  mobile text NOT NULL,
  email text NOT NULL,
  city text NOT NULL,
  role text NOT NULL,
  message text,
  consent boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed')),
  admin_note text,
  source_page text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS website_inquiries_created_at_idx
  ON website_inquiries (created_at DESC);
