import { Html } from '@react-three/drei';
import React, { useState } from 'react';

export function TwitterCard({
	position = [0, 1, 0],
	profileImage = '/textures/rauch.jpg',
	name = 'Guillermo',
	handle = '@rauchg',
	tweet = 'Geist Pixel is coming',
	tweetImage = '/textures/pixel.jpg',
	likes = 0,
	retweets = 0,
	views = 0,
	distanceFactor = 3,
}) {
	const [isHovered, setIsHovered] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(likes);

	const toggleLike = () => {
		if (isLiked) {
			setLikeCount(prev => prev - 1);
		} else {
			setLikeCount(prev => prev + 1);
		}
		setIsLiked(!isLiked);
	};

	return (
		<Html
			position={position}
			center
			className='pointer-events-auto'
			distanceFactor={distanceFactor}
			occlude={false}
      transform
		>
			<div
				className={`
          bg-gradient-to-br from-gray-900 to-black 
          rounded-xl p-6 w-96 
          transform transition-all duration-300 ease-in-out
          ${isHovered ? 'scale-105' : 'scale-100'}
          border border-gray-700
          shadow-[0_10px_50px_rgba(0,0,0,0.5)]
        `}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className='flex items-start space-x-4'>
					{/* Profile Image */}
					<div className='flex-shrink-0'>
						<img
							src={profileImage}
							alt={`${name} Profile`}
							className='w-14 h-14 rounded-full bg-gradient-to-r from-slate-400 to-slate-900 p-0.5 shadow-lg'
						/>
					</div>

					{/* Content */}
					<div className='flex-1 min-w-0'>
						{/* Header */}
						<div className='flex items-center space-x-1 mb-2'>
							<p className='text-lg font-light text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300'>
								{name}
							</p>
							<span className='text-sm text-gray-400 font-medium'>
								{handle}
							</span>
						</div>

						{/* Tweet content */}
						<p className='text-sm text-gray-300 leading-relaxed mb-4'>
							{tweet}
						</p>
						{tweetImage && (
							<img
								src={tweetImage}
								alt='tweet image'
								className='w-full object-cover rounded-lg mb-4'
							/>
						)}

						{/* Metrics */}
						<div className='flex items-center justify-start space-x-6'>
							<div
								className={`flex items-center ${
									isLiked ? 'text-red-400' : 'text-gray-400'
								} group cursor-pointer`}
								onClick={toggleLike}
							>
								<svg
									className='w-5 h-5 mr-2 transition-colors duration-200'
									fill={isLiked ? 'currentColor' : 'none'}
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
									/>
								</svg>
								<span className='text-xs font-medium transition-colors duration-200'>
									{likeCount}
								</span>
							</div>
							<div className='flex items-center text-gray-400 group'>
								<svg
									className='w-5 h-5 mr-2 transition-colors duration-200 group-hover:text-purple-400'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg>
								<span className='text-xs font-medium transition-colors duration-200 group-hover:text-purple-400'>
									{retweets}
								</span>
							</div>
							<div className='flex items-center text-gray-400 group'>
								<svg
									className='w-5 h-5 mr-2 transition-colors duration-200 group-hover:text-green-400'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
									/>
								</svg>
								<span className='text-xs font-medium transition-colors duration-200 group-hover:text-green-400'>
									{views}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Html>
	);
}
