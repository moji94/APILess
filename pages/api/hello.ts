// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  // res.status(200).json({ name: 'John Doe' })
  const name: string = req.body
  res.status(200).json(`${name}Zadeh`)
}

export const Test = (req: NextApiRequest, res: NextApiResponse) => {
  const name: string = req.body
  res.status(200).json(`${name}Zadeh`)
}
