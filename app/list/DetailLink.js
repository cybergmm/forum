'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function DetailLink() {
	let router = useRouter();
	let pathName = usePathname();
	let searchParams = useSearchParams();
	return (
		<button
			onClick={() => {
				router.prefetch('/datail/dsds'); //soft refresh
				console.log(router);
				console.log(pathName);
				console.log(searchParams);
				//페이지 미리로드는 router.prefetch
			}}
		>
			버튼
		</button>
	);
}
