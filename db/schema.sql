CREATE TABLE IF NOT EXISTS sources (id BIGSERIAL PRIMARY KEY, title TEXT NOT NULL, url TEXT, publisher TEXT, published_at TIMESTAMPTZ, source_type TEXT NOT NULL DEFAULT 'public', created_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS events (id BIGSERIAL PRIMARY KEY, title TEXT NOT NULL, summary TEXT, event_type TEXT NOT NULL DEFAULT 'FACT', location TEXT, event_date DATE, source_id BIGINT REFERENCES sources(id), confidence TEXT NOT NULL DEFAULT 'medium', created_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS institutions (id BIGSERIAL PRIMARY KEY, name TEXT NOT NULL, type TEXT, country TEXT, url TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS opportunities (id BIGSERIAL PRIMARY KEY, title TEXT NOT NULL, organization TEXT, deadline DATE, url TEXT, topic TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS idx_events_date ON events(event_date DESC);
CREATE INDEX IF NOT EXISTS idx_events_type ON events(event_type);
CREATE INDEX IF NOT EXISTS idx_opportunities_deadline ON opportunities(deadline);
