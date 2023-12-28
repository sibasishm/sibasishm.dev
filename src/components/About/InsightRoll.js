import React from 'react';

const InsightRoll = ({ insights }) => {
	return (
		<div className='w-full overflow-hidden bg-primary dark:bg-secondary text-light dark:text-dark whitespace-nowrap'>
			<div className='flex items-center justify-center w-full py-2 text-sm font-semibold tracking-wider capitalize divide-x animate-roll sm:py-3 sm:text-base'>
				{insights.map((text, index) => (
					<div key={index} className='px-4'>
						{text}
					</div>
				))}
			</div>
		</div>
	);
};

export default InsightRoll;
