/**
 * BLOCK: Post Comments
 */
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
//import attributes from "./attributes"
import edit from "./edit"
//import save from "./save"
import "./style.scss"
//import "./editor.scss"


const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/post-comments", {
	title: uagb_blocks_info.blocks["uagb/post-comments"]["title"],
	description: uagb_blocks_info.blocks["uagb/post-comments"]["description"],
	icon: UAGB_Block_Icons.marketing_button,
	category: uagb_blocks_info.category,
	keywords: [
		__( "Post Commnets" ),
		__( "post" ),
		__( "uag" ),
	],
	edit
} );