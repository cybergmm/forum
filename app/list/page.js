import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
	const db = (await connectDB).db('forum');
	let result = await db.collection('post').find().toArray();
	console.log(result[0]);

	const listArray = result.map((item, i) => {
		return (
			<div className="list-item" key={i}>
				<Link href={`/detail/${item._id}`}>
					<h4>{item.title}</h4>
				</Link>
				<DetailLink></DetailLink>
				<p>{item.content}</p>
				<p>1월 1일</p>
			</div>
		);
	});

	return <div className="list-bg">{listArray}</div>;
}
