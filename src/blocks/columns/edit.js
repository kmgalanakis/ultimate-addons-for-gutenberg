/**
 * BLOCK: UAGB - Columns Edit Class
 */


// Import classes

import styling from "./styling"
import map from "lodash/map"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import columnsSettings from "./settings"
import renderColumns from "./render"

const { __ } = wp.i18n
const {
	withSelect,
	useDispatch
} = wp.data

const {
	compose,
} = wp.compose
const {
	Component,
} = wp.element

const {
	__experimentalBlockVariationPicker,
} = wp.blockEditor

const {
	withNotices,
} = wp.components

const {
	createBlock
} = wp.blocks
class UAGBColumns extends Component {

	constructor() {
		super( ...arguments )
		this.blockVariationPickerOnSelect = this.blockVariationPickerOnSelect.bind( this )
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		this.props.setAttributes( { classMigrate: true } )

		if ( "middle" === this.props.attributes.vAlign ) {
			this.props.setAttributes( { vAlign: "center" } )
		}
		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-columns-style-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
	}

	componentDidUpdate( prevProps ) {
		var element = document.getElementById( "uagb-columns-style-" + this.props.clientId.substr( 0, 8 ) )

		if( null !== element && undefined !== element ) {
			element.innerHTML = styling( this.props )
		}
	}

	blockVariationPickerOnSelect ( nextVariation = this.props.defaultVariation ) {
			
		if ( nextVariation.attributes ) {
			this.props.setAttributes( nextVariation.attributes )
		}

		if ( nextVariation.innerBlocks ) {
			this.props.replaceInnerBlocks(
				this.props.clientId,
				this.createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
			)
		}
	}

	createBlocksFromInnerBlocksTemplate( innerBlocksTemplate ) {
		return map( innerBlocksTemplate, ( [ name, attributes, innerBlocks = [] ] ) => createBlock( name, attributes, this.createBlocksFromInnerBlocksTemplate( innerBlocks ) ) )
	}

	render() {
		
		const {  
			variations,
			hasInnerBlocks,
		 } = this.props

		if ( ! hasInnerBlocks ) {

			return (
				<__experimentalBlockVariationPicker
					icon ={ UAGB_Block_Icons.columns }
					label={ uagb_blocks_info.blocks["uagb/columns"]["title"] }
					instructions={ __( "Select a variation to start with.", "ultimate-addons-for-gutenberg" ) }
					variations={ variations }
					allowSkip
					onSelect={ ( nextVariation ) => this.blockVariationPickerOnSelect( nextVariation ) }
				/>
			)
		}
			
		return (
			<>
				{ columnsSettings( this.props ) }
				{ renderColumns( this.props ) }
			</>
		)
	}
}

const applyWithSelect = withSelect( ( select, props ) => {
	const { getBlocks, getBlocksByClientId } = select( "core/block-editor" )
	const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( "core/blocks" )
	const innerBlocks = getBlocks( props.clientId )
	const { replaceInnerBlocks } = useDispatch( "core/block-editor" )
	const { __experimentalGetPreviewDeviceType = null } = select( "core/edit-post" )

	let deviceType = __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : null

	return {
		// Subscribe to changes of the innerBlocks to control the display of the layout selection placeholder.
		innerBlocks,
		hasInnerBlocks: select( "core/block-editor" ).getBlocks( props.clientId ).length > 0,

		blockType: getBlockType( props.name ),
		defaultVariation: typeof getDefaultBlockVariation === "undefined" ? null : getDefaultBlockVariation( props.name ),
		variations: typeof getBlockVariations === "undefined" ? null : getBlockVariations( props.name ),
		replaceInnerBlocks,
		deviceType:deviceType,
	}
} )

export default compose( withNotices, applyWithSelect )( UAGBColumns )