'use server';

import { Resend } from 'resend';

// Initialize Resend. Using process.env.re_UF6Yh45N_4Zvehjj1GP7E92Lc7ogf1wYh as requested, 
// with a fallback to process.env.RESEND_API_KEY from .env.local.
const resend = new Resend(
  process.env.re_UF6Yh45N_4Zvehjj1GP7E92Lc7ogf1wYh || process.env.RESEND_API_KEY
);

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
