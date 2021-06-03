import React, { useState } from 'react';

import Skeleton, {
	SpacerSkeleton,
	TextSkeleton,
	RectSkeleton,
	CircleSkeleton,
} from '@Skeleton';

import './SettingsPageSkeleton.scss';

function FlowRowSkeleton() {
	/*return (
		<div>
			<Skeleton />
			<TextSkeleton />
			<RectSkeleton />
			<CircleSkeleton />
		</div>
	);*/

	return (
		<div className="wcf-settings-nav">
			<div className="wcf-settings-nav__tabs">
				{ Array( 5 )
					.fill()
					.map( ( i ) => {
						return (
							<div className="wcf-settings-nav__tab">
								<RectSkeleton height="45px" />
							</div>
						);
					} ) }
			</div>

			<div className="wcf-settings-nav__content">
				<TextSkeleton fontSize="35px" width="225px" />
				<TextSkeleton width="80%" />
				<TextSkeleton width="80%" />
				<TextSkeleton width="80%" />
				<TextSkeleton width="65%" />

				<SpacerSkeleton />

				<TextSkeleton fontSize="35px" width="300px" />
				<TextSkeleton width="60%" />
				<TextSkeleton width="60%" />
				<TextSkeleton width="45%" />

				<SpacerSkeleton />

				<TextSkeleton fontSize="35px" width="210px" />
				<TextSkeleton width="65%" />
				<TextSkeleton width="65%" />
				<TextSkeleton width="45%" />
			</div>
		</div>
	);
}

export default FlowRowSkeleton;
