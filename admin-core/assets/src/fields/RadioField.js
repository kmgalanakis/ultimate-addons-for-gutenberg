import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './RadioField.scss';

function RadioField( props ) {
	const { name, label, id, value, options, desc, child_class = '' } = props;

	const [ inputvalue, setInputvalue ] = useState( value );

	useEffect( () => {
		setInputvalue( value );
	}, [ value ] );

	function handleRadioClick( e ) {
		setInputvalue( e.target.value );

		// Trigger change
		let changeEvent = new CustomEvent( 'wcf:radio:change', {
			bubbles: true,
			detail: { e: e, name: props.name, value: e.target.value },
		} );

		document.dispatchEvent( changeEvent );
	}

	return (
		<div className="wcf-field wcf-radio-field">
			<div className="wcf-field__data">
				{ label && (
					<div class="wcf-field__data--label">
						<label>{ label }</label>
					</div>
				) }

				<div class={ `wcf-field__data--content ` }>
					{ options &&
						options.map( function ( option ) {
							let unique_id =
								name +
								Math.random().toString( 36 ).substring( 2, 5 );

							return (
								<>
									<div
										class={ `wcf-radio-field__option ${ child_class }` }
									>
										<input
											type="radio"
											name={ name }
											value={ option.value }
											defaultChecked={
												inputvalue === option.value
											}
											id={ unique_id }
											onClick={ handleRadioClick }
										/>
										<span class="wcf-radio-field__option-label">
											<label for={ unique_id }>
												{ option.label }
											</label>
										</span>
										{ option.desc && (
											<div className="wcf-radio-field__option-desc">
												{ option.desc }
											</div>
										) }
									</div>
								</>
							);
						} ) }
				</div>
			</div>

			{ desc && (
				<div className="wcf-field__desc">
					{ ReactHtmlParser( desc ) }
				</div>
			) }
		</div>
	);
}

export default RadioField;
