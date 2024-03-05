export default function handler(req, res) {
	// req: 요청, res: 응답
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth() + 1;
	let date = today.getDate();
	let day = today.getDay();
	let dayKo = ['월', '화', '수', '목', '금', '토', '일'];
	let hours = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();

	let nowTime = `${year}/${month}/${date}(${dayKo[day]}) ${hours}:${min}:${sec}`;

	return res.status(200).json(nowTime);
}
