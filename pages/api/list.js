import { connectDB } from '@/util/database';

export default async function handler(req, res) {
	const db = (await connectDB).db('forum');
	let result = await db.collection('post').find().toArray();
	// req: 요청, res: 응답
	if (req.method == 'GET') return res.status(200).json(result);
}
