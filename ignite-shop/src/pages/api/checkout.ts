import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

interface BodyProps {
  products_ids: string[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products_ids } = req.body as BodyProps;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (products_ids.length === 0 || !products_ids) {
    return res.status(400).json({ error: 'Price not found.' });
  }

  const success_url = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancel_url = `${process.env.NEXT_URL}/cancel`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url,
    cancel_url,
    mode: 'payment',
    line_items: products_ids.map((productId) => ({
      price: productId,
      quantity: 1,
    })),
  });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
