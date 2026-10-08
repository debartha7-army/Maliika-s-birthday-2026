-- Run this in your Supabase SQL Editor if you want remote persistent storage for Matsurika's wishes & reactions!

CREATE TABLE IF NOT EXISTS birthday_wishes (
  id BIGSERIAL PRIMARY KEY,
  sender TEXT NOT NULL DEFAULT 'Matsurika',
  wish TEXT,
  reaction TEXT DEFAULT '❤️',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (optional / allow anonymous inserts & selects)
ALTER TABLE birthday_wishes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read wishes" ON birthday_wishes
  FOR SELECT USING (true);

CREATE POLICY "Allow public insert wishes" ON birthday_wishes
  FOR INSERT WITH CHECK (true);
