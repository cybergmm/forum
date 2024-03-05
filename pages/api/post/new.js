import { connectDB } from '@/util/database';
export default async function handler(req, res) {
	if (req.method == 'POST') {
		// req: 요청, res: 응답
		console.log(req.body);
		if (req.body.title == '') {
			return res.status(500).json('제목을 작성하지 않았습니다.');
		}
		try {
			const db = (await connectDB).db('forum');
			await db.collection('post').insertOne({ title: req.body.title, content: req.body.content }, () => {
				console.log('저장완료');
			});
			return res.status(302).redirect('/list');
		} catch (error) {
			console.log(error);
		}
	}
}
