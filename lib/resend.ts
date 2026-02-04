import { Resend } from 'resend';

// Initialize Resend with a fallback for build time to avoid 'Missing API key' errors
// The actual API key should be provided in the environment variables
const resendApiKey = process.env.RESEND_API_KEY || 're_dummy_key_for_build';

export const resend = new Resend(resendApiKey);
