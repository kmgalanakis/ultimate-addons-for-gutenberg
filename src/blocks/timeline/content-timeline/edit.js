/**
 * BLOCK: Content Timeline.
 */

import classnames from "classnames"
import map from "lodash/map"
import times from "lodash/times"
import memoize from "memize"
import UAGBIcon from "../../../../dist/blocks/uagb-controls/UAGBIcon.json"
import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import contentTimelineStyle from ".././inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"
import renderSVG from "../../../../dist/blocks/uagb-controls/renderIcon"

// Import all of our Text Options requirements.
import TypographyControl from "../../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../../components/typography/fontloader"

const { dateI18n, __experimentalGetSettings } = wp.date

const { Component, Fragment } = wp.element

const { __ } = wp.i18n

const { decodeEntities } = wp.htmlEntities

// Import registerBlockType() from wp.blocks
const {
	registerBlockType,
	createBlock
} = wp.blocks

const {
	BlockControls,
	ColorPalette,
	InspectorControls,
	RichText,
	BlockAlignmentToolbar,
	PanelColorSettings,
	InnerBlocks,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	Placeholder,
	RangeControl,
	Spinner,
	TextControl,
	ToggleControl,
	Toolbar,
	ButtonGroup,
	Button,
	TabPanel,
	Dashicon,
} = wp.components

const { select, withSelect } = wp.data;


const ALLOWED_BLOCKS = [ "uagb/content-timeline-child" ]

let svg_icons = Object.keys( UAGBIcon )

class UAGBcontentTimeline extends Component {

	constructor() {
		super( ...arguments )

		this.splitBlock = this.splitBlock.bind( this )

		// this.getTimelineicon = this.getTimelineicon.bind(this)

		this.toggleDisplayPostDate    = this.toggleDisplayPostDate.bind( this )

		this.getTimelineicon			= this.getTimelineicon.bind( this )
	}

	getTimelineicon (value) {
			const { setAttributes } = this.props
			const getChildBlocks = select('core/block-editor').getBlocks( this.props.clientId );
			
			getChildBlocks.forEach((UAGBcontentTimelineChild, key) => {
				UAGBcontentTimelineChild.attributes.iconSize = value,
				UAGBcontentTimelineChild.attributes.connectorBgsize = value,
				UAGBcontentTimelineChild.attributes.borderwidth = value,
				UAGBcontentTimelineChild.attributes.separatorwidth = value, 
				UAGBcontentTimelineChild.attributes.icon = value,
				UAGBcontentTimelineChild.attributes.separatorColor  = value,
				UAGBcontentTimelineChild.attributes.iconColor  = value, 
				UAGBcontentTimelineChild.attributes.separatorBg  = value, 
				UAGBcontentTimelineChild.attributes.separatorBorder  = value
			});
			setAttributes( { icon: value, iconSize: value, connectorBgsize: value, borderwidth : value, separatorwidth : value, separatorColor : value, iconColor : value, separatorBg : value, separatorBorder : value } )
		}

	splitBlock( before, after, ...blocks ) {
		const {
			attributes,
			insertBlocksAfter,
			setAttributes,
			onReplace,
		} = this.props

		if ( after ) {
			// Append "After" content as a new paragraph block to the end of
			// any other blocks being inserted after the current paragraph.
			blocks.push( createBlock( "core/paragraph", { content: after } ) )
		}

		if ( blocks.length && insertBlocksAfter ) {
			insertBlocksAfter( blocks )
		}

		const { content } = attributes
		if ( ! before ) {
			// If before content is omitted, treat as intent to delete block.
			onReplace( [] )
		} else if ( content !== before ) {
			// Only update content if it has in-fact changed. In case that user
			// has created a new paragraph at end of an existing one, the value
			// of before will be strictly equal to the current content.
			setAttributes( { content: before } )
		}
	}
	/**
     * Function Name: toggleDisplayPostDate.
     */
	toggleDisplayPostDate() {
		const { displayPostDate } = this.props.attributes
		const { setAttributes } = this.props

		setAttributes( { displayPostDate: ! displayPostDate } )
	}

	/**
     * [getTimelineicon description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
	// getTimelineicon(value) {
	// 	this.props.setAttributes( { icon: value } )
	// }

	saveDate( value, index ) {
		const { attributes, setAttributes } = this.props
		const { t_date } = attributes

		const newItems = t_date.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )

		setAttributes( {
			t_date: newItems,
		} )
	}

	render() {

		// Setup the attributes.
		const {
			isSelected,
			className,
			setAttributes,
			insertBlocksAfter,
			mergeBlocks,
			onReplace,
			attributes: {
				tm_content,
				headingAlign,
				separatorHeight,
				headSpace,
				separatorSpace,
				headingColor,
				subHeadingColor,
				backgroundColor,
				separatorColor,
				separatorFillColor,
				separatorBg,
				separatorBorder,
				borderFocus,
				headingTag,
				headFontSizeType,
				headFontSize,
				headFontSizeTablet,
				headFontSizeMobile,
				headFontFamily,
				headFontWeight,
				headFontSubset,
				headLineHeightType,
				headLineHeight,
				headLineHeightTablet,
				headLineHeightMobile,
				headLoadGoogleFonts,
				timelineItem,
				timelinAlignment,
				arrowlinAlignment,
				subHeadFontSizeType,
				subHeadFontSize,
				subHeadFontSizeTablet,
				subHeadFontSizeMobile,
				subHeadFontFamily,
				subHeadFontWeight,
				subHeadFontSubset,
				subHeadLineHeightType,
				subHeadLineHeight,
				subHeadLineHeightTablet,
				subHeadLineHeightMobile,
				subHeadLoadGoogleFonts,
				verticalSpace,
				horizontalSpace,
				separatorwidth,
				borderwidth,
				connectorBgsize,
				dateBottomspace,
				align,
				icon,
				iconColor,
				dateColor,
				dateFontsizeType,
				dateFontsize,
				dateFontsizeTablet,
				dateFontsizeMobile,
				dateFontFamily,
				dateFontWeight,
				dateFontSubset,
				dateLineHeightType,
				dateLineHeight,
				dateLineHeightTablet,
				dateLineHeightMobile,
				dateLoadGoogleFonts,
				iconSize,
				borderRadius,
				bgPadding,
				block_id,
				iconFocus,
				iconBgFocus,
				t_date,
				displayPostDate,
				stack,
				dateFormat
			},
		} = this.props

		// Parameters for FontIconPicker
		const icon_props = {
			icons: svg_icons,
			value: icon,
			onChange: this.getTimelineicon,
			isMulti: false,
			renderFunc: renderSVG,
			noSelectedPlaceholder: __( "Select Icon" )
		}

		console.log(this.props) 

		const iconColorSettings = (
			<PanelColorSettings title={ __( "Color Settings" ) } initialOpen={ true }
				colorSettings={ [
					{
						value: separatorColor,
						onChange: ( colorValue ) => setAttributes( { separatorColor: colorValue } ),
						label: __( "Line Color" ),
					},
					{
						value: iconColor,
						onChange: ( colorValue ) => setAttributes( { iconColor: colorValue } ),
						label: __( "Icon Color" ),
					},
					{
						value: separatorBg,
						onChange: ( colorValue ) => setAttributes( { separatorBg: colorValue } ),
						label: __( "Background Color" ),
					},
					{
						value: separatorBorder,
						onChange: ( colorValue ) => setAttributes( { separatorBorder: colorValue } ),
						label: __( "Border Color" ),
					},
				] }
			>
			</PanelColorSettings>
		)

		const iconFocusSettings = (
			<PanelColorSettings	title={ __( "Color Settings" ) } initialOpen={ true }
				colorSettings={ [
					{
						value: separatorFillColor,
						onChange: ( colorValue ) => setAttributes( { separatorFillColor: colorValue } ),
						label: __( "Line Color" ),
					},
					{
						value: iconFocus,
						onChange: ( colorValue ) => setAttributes( { iconFocus: colorValue } ),
						label: __( "Icon Color" ),
					},
					{
						value: iconBgFocus,
						onChange: ( colorValue ) => setAttributes( { iconBgFocus: colorValue } ),
						label: __( "Background Color" ),
					},
					{
						value: borderFocus,
						onChange: ( colorValue ) => setAttributes( { borderFocus: colorValue } ),
						label: __( "Border Color" ),
					},
				] }
			>
			</PanelColorSettings>
		)

		const iconControls = (
			<PanelBody	title={ __( "Connector Color Settings" ) }	initialOpen={ true }>
				<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
					activeClass="active-tab"
					tabs={ [
						{
							name: "normal",
							title: __( "Normal" ),
							className: "uagb-normal-tab",
						},
						{
							name: "focus",
							title: __( "Focus" ),
							className: "uagb-focus-tab",
						},
					] }>
					{
						( tabName ) => {
							let tabout
							if( "focus" === tabName.name ) {
								tabout = iconFocusSettings
							}else {
								tabout = iconColorSettings
							}
							return <div>{ tabout }</div>
						}
					}
				</TabPanel>
			</PanelBody>
		)

		const renderDateSettings = ( index ) => {
			return (
				<Fragment key ={index}>
					<TextControl
						label= { __( "Date" ) + " " + ( index + 1 ) + " " + __( "Settings" ) }
						value= { t_date[ index ].title }
						onChange={ value => {
							this.saveDate( { title: value }, index )
						} }
					/>
				</Fragment>
			)
		}

		const sizeTypes = [
			{ key: "px", name: __( "px" ) },
			{ key: "em", name: __( "em" ) },
		]

		let loadHeadGoogleFonts
		let loadSubHeadGoogleFonts
		let loadDateGoogleFonts

		if( headLoadGoogleFonts == true ) {

			const headconfig = {
				google: {
					families: [ headFontFamily + ( headFontWeight ? ":" + headFontWeight : "" ) ],
				},
			}

			loadHeadGoogleFonts = (
				<WebfontLoader config={ headconfig }>
				</WebfontLoader>
			)
		}

		if( subHeadLoadGoogleFonts == true ) {

			const subHeadconfig = {
				google: {
					families: [ subHeadFontFamily + ( subHeadFontWeight ? ":" + subHeadFontWeight : "" ) ],
				},
			}

			loadSubHeadGoogleFonts = (
				<WebfontLoader config={ subHeadconfig }>
				</WebfontLoader>
			)
		}

		if( dateLoadGoogleFonts == true ) {

			const dateconfig = {
				google: {
					families: [ dateFontFamily + ( dateFontWeight ? ":" + dateFontWeight : "" ) ],
				},
			}

			loadDateGoogleFonts = (
				<WebfontLoader config={ dateconfig }>
				</WebfontLoader>
			)
		}

		var today = new Date()

		const renderSettings = (
			<PanelBody	title={ __( "Date Settings" ) }	initialOpen={ false } >
				<ToggleControl
					label={ __( "Display Post Date" ) }
					checked={ displayPostDate }
					onChange={ this.toggleDisplayPostDate }
				/>

				{displayPostDate && 
				<SelectControl
					label={ __( "Date Format" ) }
					value={ dateFormat }
					onChange={ ( value ) => setAttributes( { dateFormat: value } ) }
					options={ [
						{ value: 'M j, Y' , label: dateI18n( 'M j, Y', today ) },
						{ value: 'F j, Y' , label: dateI18n( 'F j, Y', today ) },
						{ value: 'm/d/Y'  , label: dateI18n( 'm/d/Y', today ) },
						{ value: 'm-d-Y'  , label: dateI18n( 'm-d-Y', today ) },
						{ value: 'm.d.Y'  , label: dateI18n( 'm.d.Y', today ) },
						{ value: 'd M Y'  , label: dateI18n( 'd M Y', today ) },
						{ value: 'd F Y'  , label: dateI18n( 'd F Y', today ) },
						{ value: 'd-m-Y'  , label: dateI18n( 'd-m-Y', today ) },
						{ value: 'd.m.Y'  , label: dateI18n( 'd.m.Y', today ) },
						{ value: 'd/m/Y'  , label: dateI18n( 'd/m/Y', today ) },
						{ value: 'Y-m-d'  , label: dateI18n( 'Y-m-d', today ) },
						{ value: 'Y.m.d'  , label: dateI18n( 'Y.m.d', today ) },
						{ value: 'Y/m/d'  , label: dateI18n( 'Y/m/d', today ) },
						{ value: 'M, Y'   , label: dateI18n( 'M, Y', today ) },
						{ value: 'M Y'    , label: dateI18n( 'M Y', today ) },
						{ value: 'F, Y'   , label: dateI18n( 'F, Y', today ) },
						{ value: 'F Y'    , label: dateI18n( 'F Y', today ) },
						{ value: 'custom'    , label: __( 'Normal Text' ) },
					] }
				/>}

				{ displayPostDate && times( timelineItem, n => renderDateSettings( n ) ) }

				{ displayPostDate && ( timelinAlignment !=="center" ) && <RangeControl
					label={ __( "Date Bottom Spacing" ) }
					value={ dateBottomspace }
					onChange={ ( value ) => setAttributes( { dateBottomspace: value } ) }
					min={ 0 }
					max={ 50 }
					allowReset
				/>
				}

				{ displayPostDate &&  <Fragment>
					<hr className="uagb-editor__separator" />
					<p className="uagb-setting-label">{ __( "Date Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: dateColor }} ></span></span></p>
					<ColorPalette
						value={ dateColor }
						onChange={ ( colorValue ) => setAttributes( { dateColor: colorValue } ) }
						allowReset
					/>
					<hr className="uagb-editor__separator" />
					<h2>{ __( "Date Typography" ) }</h2>
					<TypographyControl
						label={ __( "Typography" ) }
						attributes = { this.props.attributes }
						setAttributes = { setAttributes }
						loadGoogleFonts = { { value: dateLoadGoogleFonts, label: 'dateLoadGoogleFonts' } }
						fontFamily = { { value: dateFontFamily, label: 'dateFontFamily' } }
						fontWeight = { { value: dateFontWeight, label: 'dateFontWeight' } }
						fontSubset = { { value: dateFontSubset, label: 'dateFontSubset' } }
						fontSizeType = { { value: dateFontsizeType, label: 'dateFontsizeType' } }
						fontSize = { { value: dateFontsize, label: 'dateFontsize' } }
						fontSizeMobile = { { value: dateFontsizeMobile, label: 'dateFontsizeMobile' } }
						fontSizeTablet= { { value: dateFontsizeTablet, label: 'dateFontsizeTablet' } }
						lineHeightType = { { value: dateLineHeightType, label: 'dateLineHeightType' } }
						lineHeight = { { value: dateLineHeight, label: 'dateLineHeight' } }
						lineHeightMobile = { { value: dateLineHeightMobile, label: 'dateLineHeightMobile' } }
						lineHeightTablet= { { value: dateLineHeightTablet, label: 'dateLineHeightTablet' } }
					/>
				</Fragment>
				}
			</PanelBody>
		)

		const content_control = (
			<InspectorControls>
				{ renderSettings }
				<PanelBody	title={ __( "Layout" ) } initialOpen={ false }>
					<SelectControl
						label={ __( "Orientation" ) }
						value={ timelinAlignment }
						onChange={ ( value ) => setAttributes( { timelinAlignment: value } ) }
						options={ [
							{ value: "left", label: __( "Left" ) },
							{ value: "right", label: __( "Right" ) },
							{ value: "center", label: __( "Center" ) },
						] }
					/>
					<SelectControl
						label={ __( "Arrow Alignment" ) }
						value={ arrowlinAlignment }
						onChange={ ( value ) => setAttributes( { arrowlinAlignment: value } ) }
						options={ [
							{ value: "top", label: __( "Top" ) },
							{ value: "bottom", label: __( "Bottom" ) },
							{ value: "center", label: __( "Center" ) },
						] }
					/>
					<SelectControl
						label={ __( "Stack on" ) }
						value={ stack }
						options={ [
							{ value: "none", label: __( "None" ) },
							{ value: "tablet", label: __( "Tablet" ) },
							{ value: "mobile", label: __( "Mobile" ) },
						] }
						help={ __( "Note: Choose on what breakpoint the Content Timeline will stack." ) }
						onChange={ ( value ) => setAttributes( { stack: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( "Spacing" ) } initialOpen={ false } >
					<RangeControl
						label={ __( "Horizontal Space" ) }
						value={ horizontalSpace }
						onChange={ ( value ) => setAttributes( { horizontalSpace: value } ) }
						min={ 1 }
						max={ 50 }
						allowReset
					/>
					<RangeControl
						label={ __( "Vertical Space" ) }
						value={ verticalSpace }
						onChange={ ( value ) => setAttributes( { verticalSpace: value } ) }
						min={ 1 }
						max={ 100 }
						allowReset
					/>
					<RangeControl
						label={ __( "Heading Bottom Spacing" ) }
						value={ headSpace }
						onChange={ ( value ) => setAttributes( { headSpace: value } ) }
						min={ 0 }
						max={ 50 }
						allowReset
					/>
				</PanelBody>
				<PanelBody title={ __( "Connector" ) } initialOpen={ false } >
					<FontIconPicker {...icon_props} />
					<RangeControl
						label={ __( "Icon Size" ) }    
						value={ iconSize }		
						onChange={ ( value ) => setAttributes( { iconSize: value } ) }
						min={ 0 }
						max={ 30 }
						allowReset
					/>
					<RangeControl
						label={ __( "Icon Background Size" ) }
						value={ connectorBgsize }
						onChange={ ( value ) => setAttributes( { connectorBgsize: value } ) }
						min={ 25 }
						max={ 90 }
						allowReset
					/>
					<RangeControl
						label={ __( "Border Width" ) }
						value={ borderwidth }
						onChange={ ( value ) => setAttributes( { borderwidth: value } ) }
						min={ 1 }
						max={ 10 }
						allowReset
					/>
					<RangeControl
						label={ __( "Connector Width" ) }
						value={ separatorwidth }
						onChange={ ( value ) => setAttributes( { separatorwidth: value } ) }
						min={ 1 }
						max={ 10 }
						allowReset
					/>
					{ iconControls }
				</PanelBody>
				<PanelColorSettings
					title={ __( "Color Settings" ) }
					initialOpen={ false }
					colorSettings={ [
						{
							value: headingColor,
							onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
							label: __( "Heading Color" ),
						},
						{
							value: subHeadingColor,
							onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
							label: __( "Content Color" ),
						},
						{
							value: backgroundColor,
							onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
							label: __( "Background Color" ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
		)

		// const getContentTimelineTemplate = memoize( ( icon_block, tm_content ) => {
		// 	return times( icon_block, n => [ 'uagb/content-timeline-child', 
		// 		{
		// 			iconColor:iconColor,
		// 			iconSize:iconSize,
		// 			iconBgFocus:iconBgFocus,
		// 			borderFocus:borderFocus,
		// 			iconColor:iconColor,
		// 			timelineItem:timelineItem,
		// 			tm_content:tm_content[n],
		// 		}
		// 	] )
		// } )

		const getContentTimelineTemplate = [
			[ 'uagb/content-timeline-child', 
				{
					iconColor:iconColor,
					iconSize:iconSize,
					iconBgFocus:iconBgFocus,
					borderFocus:borderFocus,
					iconColor:iconColor,
					timelineItem:timelineItem,
					tm_content:tm_content,
				}
			]
		];

		return (
			<Fragment>
				{ content_control }
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ ( value ) => {
							setAttributes( { align: value } )
						} }
						controls={ [ "center", "left","right" ] }
					/>
				</BlockControls>
				<div  className={ classnames(
					className,
					"uagb-timeline__outer-wrap",
					`uagb-block-${ this.props.clientId }`
				) }>
					<div  className = { classnames(
						"uagb-timeline__content-wrap",
						...ContentTmClasses( this.props.attributes ),
					) }>
						<div className = "uagb-timeline-wrapper">
							<div className = "uagb-timeline__main">
								<InnerBlocks
									template={ getContentTimelineTemplate }
									templateLock={ false }
									allowedBlocks={ ALLOWED_BLOCKS }	
								/>
								<div className = "uagb-timeline__line" >
									<div className = "uagb-timeline__line__inner"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{ loadHeadGoogleFonts }
				{ loadSubHeadGoogleFonts }
				{ loadDateGoogleFonts }
			</Fragment>
		)
	}

	componentDidMount() {
		//Store client id.
		this.props.setAttributes( { block_id: this.props.clientId } )
		this.props.setAttributes( { classMigrate: true } )
		this.props.setAttributes( { childMigrate : true } )

		var id = this.props.clientId
		window.addEventListener("load", this.timelineContent_back(id))
		window.addEventListener("resize", this.timelineContent_back(id))
		var time = this
		$(".edit-post-layout__content").scroll( function(event) {
			time.timelineContent_back(id)
		})

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-content-timeline-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	componentDidUpdate(){
		var id = this.props.clientId
		window.addEventListener("load", this.timelineContent_back(id))
		window.addEventListener("resize", this.timelineContent_back(id))
		var time = this
		$(".edit-post-layout__content").scroll( function(event) {
			time.timelineContent_back(id)
		})
	}

	/*  Js for timeline line and inner line filler*/
	timelineContent_back(id){
		var timeline            = $(".uagb-timeline").parents("#block-"+id)
		var tm_item             = timeline.find(".uagb-timeline")
		var line_inner          = timeline.find(".uagb-timeline__line__inner")
		var line_outer          = timeline.find(".uagb-timeline__line")
		var $icon_class         = timeline.find(".uagb-timeline__marker")
		if( $icon_class.length > 0){
			var $card_last          = timeline.find(".uagb-timeline__field:last-child")
			var timeline_start_icon = $icon_class.first().position()
			var timeline_end_icon   = $icon_class.last().position()
			line_outer.css("top", timeline_start_icon.top )

			var timeline_card_height = $card_last.height()
			var last_item_top = $card_last.offset().top - tm_item.offset().top
			var $last_item, parent_top
			var $document = $(document)

			if( tm_item.hasClass("uagb-timeline__arrow-center")) {

				line_outer.css("bottom", timeline_end_icon.top )

				parent_top = last_item_top - timeline_start_icon.top
				$last_item = parent_top + timeline_end_icon.top

			} else if( tm_item.hasClass("uagb-timeline__arrow-top")) {

				var top_height = timeline_card_height - timeline_end_icon.top
				line_outer.css("bottom", top_height )

				$last_item = last_item_top

			} else if( tm_item.hasClass("uagb-timeline__arrow-bottom")) {

				var bottom_height = timeline_card_height - timeline_end_icon.top
				line_outer.css("bottom", bottom_height )

				parent_top = last_item_top - timeline_start_icon.top
				$last_item = parent_top + timeline_end_icon.top
			}

			var num = 0
			var elementEnd = $last_item + 20

			var connectorHeight = 3 * timeline.find(".uagb-timeline__marker:first").height()
			var viewportHeight = document.documentElement.clientHeight + connectorHeight
			var viewportHeightHalf = viewportHeight/2 + connectorHeight

			var elementPos = tm_item.offset().top

			var new_elementPos = elementPos + timeline_start_icon.top

			var photoViewportOffsetTop = new_elementPos - $document.scrollTop()

			if (photoViewportOffsetTop < 0) {
				photoViewportOffsetTop = Math.abs(photoViewportOffsetTop)
			} else {
				photoViewportOffsetTop = -Math.abs(photoViewportOffsetTop)
			}

			if ( elementPos < (viewportHeightHalf) ) {
				if ( (viewportHeightHalf) + Math.abs(photoViewportOffsetTop) < (elementEnd) ) {
					line_inner.height((viewportHeightHalf) + photoViewportOffsetTop)
				}else{
					if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
						line_inner.height(elementEnd)
					}
				}
			} else {
				if ( (photoViewportOffsetTop  + viewportHeightHalf) < elementEnd ) {
					if (0 > photoViewportOffsetTop) {
						line_inner.height((viewportHeightHalf) - Math.abs(photoViewportOffsetTop))
						++num
					} else {
						line_inner.height((viewportHeightHalf) + photoViewportOffsetTop)
					}
				}else{
					if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
						line_inner.height(elementEnd)
					}
				}
			}

		
		}
	}
}
export default UAGBcontentTimeline