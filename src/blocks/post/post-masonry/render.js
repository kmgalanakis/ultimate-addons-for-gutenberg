import {
	DEFAULT_POST_LIST_LAYOUT,
	getBlockMap,
	getPostLayoutConfig,
	InnerBlockLayoutContextProvider,
} from '../function';
import Blog from './blog';
import { __ } from '@wordpress/i18n';

const { createBlock } = wp.blocks;

const { InnerBlocks } = wp.blockEditor;

const { Placeholder, Button, Disabled, Tip } = wp.components;

const Render = ( props ) => {
	const { state, setState, togglePreview } = props;

	props = props.parentProps;

	const { categoriesList, latestPosts, attributes, deviceType } = props;

	const renderEditMode = () => {
		const onDone = () => {
			const { block, setAttributes } = props;
			setAttributes( {
				layoutConfig: getPostLayoutConfig( block ),
			} );
			setState( { innerBlocks: block } );
			togglePreview();
		};

		const onCancel = () => {
			const { replaceInnerBlocks } = props;
			const { innerBlocks } = state;
			replaceInnerBlocks( props.clientId, innerBlocks );
			togglePreview();
		};

		const onReset = () => {
			const { block, replaceInnerBlocks } = props;
			const newBlocks = [];
			DEFAULT_POST_LIST_LAYOUT.map( ( [ name, attributes ] ) => {
				newBlocks.push( createBlock( name, attributes ) );
				return true;
			} );
			replaceInnerBlocks( props.clientId, newBlocks );
			setState( { innerBlocks: block } );
		};

		const InnerBlockProps = {
			template: props.attributes.layoutConfig,
			templateLock: false,
			allowedBlocks: Object.keys( getBlockMap( 'uagb/post-masonry' ) ),
		};
		if ( props.attributes.layoutConfig.length !== 0 ) {
			InnerBlockProps.renderAppender = false;
		}
		return (
			<Placeholder label="Post Masonry Layout">
				<div className="uagb-block-all-post-grid-item-template">
					<Tip>
						{ __(
							'Edit the blocks inside the preview below to change the content displayed for each post within the post grid.'
						) }
					</Tip>
					<InnerBlockLayoutContextProvider
						parentName="uagb/post-masonry"
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

	const renderViewMode = (
		<Disabled>
			<Blog
				attributes={ attributes }
				className={ props.className }
				latestPosts={ latestPosts }
				block_id={ props.clientId.substr( 0, 8 ) }
				categoriesList={ categoriesList }
				deviceType={ deviceType }
			/>
		</Disabled>
	);

	return <>{ state.isEditing ? renderEditMode() : renderViewMode }</>;
};

export default React.memo( Render );
