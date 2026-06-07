'use server';

import { Resend } from 'resend';
import { headers } from 'next/headers';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Resend. Using process.env.re_UF6Yh45N_4Zvehjj1GP7E92Lc7ogf1wYh as requested, 
// with a fallback to process.env.RESEND_API_KEY from .env.local.
const resend = new Resend(
  process.env.re_UF6Yh45N_4Zvehjj1GP7E92Lc7ogf1wYh || process.env.RESEND_API_KEY
);

// Initialize Upstash Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Configure sliding window rate limit: 3 requests per 60 seconds
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '60 s'),
  analytics: true,
});

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string | null;
  const email = formData.get('email') as string | null;
  const requirement = formData.get('requirement') as string | null;
  const specifications = formData.get('specifications') as string | null;

  // Basic validation error handling
  if (!name || !email || !requirement || !specifications) {
    return { error: 'Missing fields' };
  }

  try {
    // Rate Limiting check based on client IP
    const headerList = await headers();
    const ip = headerList.get('x-forwarded-for') || '127.0.0.1';
    const { success } = await ratelimit.limit(`contact_rate_limit_${ip}`);
    
    if (!success) {
      return { error: 'Too many requests. Please try again in a minute.' };
    }

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'dafizzafrz@gmail.com',
      subject: `New Inquiry: ${requirement} from ${name}`,
      text: `Sender Email: ${email}\n\nProject Specifications:\n${specifications}`,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    return { error: err.message || 'An unexpected error occurred' };
  }
}
