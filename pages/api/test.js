export default function handler(req, res) {
	// req: 요청, res: 응답
	if (req.me) return res.status(200).json('처리완료');
}
