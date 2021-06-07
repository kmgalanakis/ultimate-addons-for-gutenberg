const TweetButton = ( { attributes } ) => (
	<a
		href="javascript:void(0)"
		className="uagb-blockquote__tweet-button"
		target="_blank"
		rel="noopener noreferrer"
	>
		{ attributes.iconView === 'icon_text' && (
			<>
				{ wp.UAGBBlockIcons.quote_tweet_icon }
				<span className="uagb-blockquote__tweet-label">
					{ attributes.iconLabel }
				</span>
			</>
		) }

		{ attributes.iconView === 'icon' && (
			<>{ wp.UAGBBlockIcons.quote_tweet_icon }</>
		) }

		{ attributes.iconView === 'text' && (
			<>
				<span className="uagb-blockquote__tweet-label">
					{ attributes.iconLabel }
				</span>
			</>
		) }
	</a>
);

export default TweetButton;
