/**
 * BLOCK: Forms - URL - Save Block
 */

import classnames from "classnames"

const { __ } = wp.i18n
const {	RichText } = wp.blockEditor
export default function save( props ) {
	
	const { attributes } = props

	const {
		block_id,
		urlRequired,
		urlName
	} = attributes

	var url_field_name = urlName.replace(/\s+/g, '-').toLowerCase();

	return (
		<div className={ classnames(
			"uagb-forms-url-wrap",
			`uagb-block-${ block_id }`,
		) }>
				<RichText.Content
			tagName="div"
			value={ urlName }
			className='uagb-forms-url-label'
			
			/>
			<input type="url" name={url_field_name} required={ urlRequired } className="uagb-forms-url-input"/>					

		</div>
	)
}