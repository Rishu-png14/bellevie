-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only allow inserts through authenticated service role (edge function)
-- No public read/write access - admin only via service role
CREATE POLICY "Service role can insert contact submissions"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- Create table for custom order requests
CREATE TABLE public.custom_order_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  vision TEXT NOT NULL,
  fabric_preference TEXT NOT NULL,
  measurements TEXT,
  consultation_requested BOOLEAN NOT NULL DEFAULT false,
  inspiration_file_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.custom_order_requests ENABLE ROW LEVEL SECURITY;

-- Only allow inserts through service role (edge function)
CREATE POLICY "Service role can insert custom orders"
ON public.custom_order_requests
FOR INSERT
WITH CHECK (true);