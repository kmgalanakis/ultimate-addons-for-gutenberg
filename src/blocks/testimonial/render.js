import classnames from 'classnames';
import Slider from 'react-slick';
import PositionClasses from './classes';
import UAGB_Block_Icons from '@Controls/block-icons';
import React, { lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const TestimonialImage = lazy( () =>
	import(
		/* webpackChunkName: "chunks/testimonial/Image" */ './components/Image'
	)
);
const AuthorName = lazy( () =>
	import(
		/* webpackChunkName: "chunks/testimonial/AuthorName" */ './components/AuthorName'
	)
);
const Company = lazy( () =>
	import(
		/* webpackChunkName: "chunks/testimonial/Company" */ './components/Company'
	)
);
const Description = lazy( () =>
	import(
		/* webpackChunkName: "chunks/testimonial/Description" */ './components/Description'
	)
);
const Render = ( props ) => {
	props = props.parentProps;
	const { className, setAttributes, attributes, deviceType } = props;

	// Setup the attributes.
	const {
		test_block,
		imagePosition,
		columns,
		tcolumns,
		mcolumns,
		pauseOnHover,
		infiniteLoop,
		transitionSpeed,
		arrowDots,
		arrowSize,
		arrowBorderSize,
		arrowBorderRadius,
		autoplay,
		autoplaySpeed,
		arrowColor,
	} = attributes;

	const NextArrow = () => {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-next slick-arrow"
				aria-label="Next"
				tabIndex="0"
				role="button"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: arrowBorderSize,
				} }
			>
				{ UAGB_Block_Icons.carousel_right }
			</button>
		);
	};

	const PrevArrow = () => {
		return (
			<button
				type="button"
				data-role="none"
				className="slick-prev slick-arrow"
				aria-label="Previous"
				tabIndex="0"
				role="button"
				style={ {
					borderColor: arrowColor,
					borderRadius: arrowBorderRadius,
					borderWidth: arrowBorderSize,
				} }
			>
				{ UAGB_Block_Icons.carousel_left }
			</button>
		);
	};

	const dots =
		'dots' == arrowDots || 'arrows_dots' == arrowDots ? true : false;
	const arrows =
		'arrows' == arrowDots || 'arrows_dots' == arrowDots ? true : false;

	const settings = {
		slidesToShow: columns,
		slidesToScroll: 1,
		autoplaySpeed,
		autoplay,
		infinite: infiniteLoop,
		pauseOnHover,
		speed: transitionSpeed,
		arrows,
		dots,
		rtl: false,
		draggable: false,
		nextArrow: <NextArrow arrowSize={ arrowSize } />,
		prevArrow: <PrevArrow arrowSize={ arrowSize } />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: tcolumns,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: mcolumns,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div
			className={ classnames(
				className,
				'uagb-slick-carousel uagb-tm__arrow-outside',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<Slider
				className={ classnames(
					'is-carousel',
					`uagb-tm__columns-${ columns }`,
					'uagb-tm__items'
				) }
				{ ...settings }
			>
				<Suspense fallback={ lazyLoader() }>
				{ test_block.map( ( test, index ) => (
					<div
						className={ classnames(
							'uagb-testimonial__wrap',
							...PositionClasses( attributes )
						) }
						key={ 'wrap-' + index }
					>
						<div
							className="uagb-tm__content"
							key={ 'tm_content-' + index }
						>
							<div className="uagb-tm__overlay"></div>
							{ ( imagePosition == 'top' ||
								imagePosition == 'left' ) && (
								<TestimonialImage
									attributes={ attributes }
									index_value={ index }
								/>
							) }

							<div className="uagb-tm__text-wrap">
								{
									// Get description.
									<>
										<Description
											attributes={ attributes }
											setAttributes={ setAttributes }
											props={ props }
											index_value={ index }
										/>
									</>
								}
								<div className="uagb-tm__meta-inner">
									{ imagePosition == 'bottom' && (
										<TestimonialImage
											attributes={ attributes }
											index_value={ index }
										/>
									) }

									{
										<>
											<div
												className="uagb-testimonial-details"
												key={ 'tm_wraps-' + index }
											>
												<AuthorName
													attributes={ attributes }
													setAttributes={
														setAttributes
													}
													props={ props }
													index_value={ index }
												/>
												<Company
													attributes={ attributes }
													setAttributes={
														setAttributes
													}
													props={ props }
													index_value={ index }
												/>
											</div>
										</>
									}
								</div>
							</div>
							{ imagePosition == 'right' && (
								<TestimonialImage
									attributes={ attributes }
									index_value={ index }
								/>
							) }
						</div>
					</div>
				) ) }
				</Suspense>
			</Slider>
		</div>
	);
};
export default React.memo( Render );
