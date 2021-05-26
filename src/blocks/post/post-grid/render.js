/**
 * BLOCK: Post Grid - Editor Render.
 */

// Import Post Components
import Blog from './blog';

import {
	InnerBlockLayoutContextProvider,
	DEFAULT_POST_LIST_LAYOUT,
	getPostLayoutConfig,
	getBlockMap,
} from '.././function';

import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

import { Placeholder, Button, Tip, Disabled } from '@wordpress/components';

import { InnerBlocks } from '@wordpress/block-editor';

const Render = ( props ) => {

	const { isEditing } = props.state;

	// Caching all Props.
	const { attributes, latestPosts, categoriesList, deviceType } = props.parentProps;

	const renderEditMode = () => {

		const onDone = () => {
			const { block, setAttributes } = props.parentProps;
			setAttributes( {
				layoutConfig: getPostLayoutConfig( block ),
			} );
			props.setStateValue( { innerBlocks: block } );
			props.togglePreview();
		};

		const onCancel = () => {
			const { replaceInnerBlocks } = props.parentProps;
			const { innerBlocks } = props.state;
			replaceInnerBlocks( props.parentProps.clientId, innerBlocks );
			props.togglePreview();
		};

		const onReset = () => {
			const { block, replaceInnerBlocks } = props.parentProps;
			const newBlocks = [];
			DEFAULT_POST_LIST_LAYOUT.map( ( [ name, attributes ] ) => {
				newBlocks.push( createBlock( name, attributes ) );
				return true;
			} );
			replaceInnerBlocks( props.parentProps.clientId, newBlocks );
			props.setStateValue( { innerBlocks: block } );
		};

		const InnerBlockProps = {
			template: props.parentProps.attributes.layoutConfig,
			templateLock: false,
			allowedBlocks: Object.keys( getBlockMap( 'uagb/post-grid' ) ),
		};

		if ( props.parentProps.attributes.layoutConfig.length !== 0 ) {
			InnerBlockProps.renderAppender = false;
		}
		return (
			<Placeholder label="Post Grid Layout">
				<div className="uagb-block-all-post-grid-item-template">
					<Tip>
						{ __(
							'Edit the blocks inside the preview below to change the content displayed for each post within the post grid.'
						) }
					</Tip>
					<InnerBlockLayoutContextProvider
						parentName="uagb/post-grid"
						parentClassName="uagb-block-grid"
					>
						<article>
							<div className="uagb-post__inner-wrap uagb-post__edit-mode">
								<div className="uagb-post__text">
									<InnerBlocks { ...InnerBlockProps } />
								</div>
							</div>
						</article>
					</InnerBlockLayoutContextProvider>
					<div className="uagb-block-all-post__actions">
						<Button
							className="uagb-block-all-post__done-button"
							isPrimary
							onClick={ onDone }
						>
							{ __( 'Done' ) }
						</Button>
						<Button
							className="uagb-block-all-post__cancel-button"
							isTertiary
							onClick={ onCancel }
						>
							{ __( 'Cancel' ) }
						</Button>
						<Button
							className="uagb-block-all-post__reset-button"
							onClick={ onReset }
						>
							{ __( 'Reset Layout' ) }
						</Button>
					</div>
				</div>
			</Placeholder>
		);
	};

	if ( isEditing ) {
		return (
			<>
				{ renderEditMode() } 
			</>
		);
	}

	const renderViewMode = () => {
		return (
			<Disabled>
				<Blog
					attributes={ attributes }
					className={ props.parentProps.className }
					latestPosts={ latestPosts }
					block_id={ props.parentProps.clientId.substr( 0, 8 ) }
					categoriesList={ categoriesList }
					deviceType={ deviceType }
				/>
			</Disabled>
		);
	};

	return <>{ renderViewMode() }</>;
}

export default React.memo( Render );
