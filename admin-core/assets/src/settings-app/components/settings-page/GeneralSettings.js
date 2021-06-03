import React, { useState } from 'react';
import { useStateValue } from '@Utils/StateProvider';
import { useSettingsValue } from '@Utils/SettingsProvider';
import { SubmitButton } from '@Fields';

import apiFetch from '@wordpress/api-fetch';

import { __ } from '@wordpress/i18n';

import './GeneralSettings.scss';
import SettingTable from '../common/SettingTable';

function GeneralSettings( props ) {
	const [
		{ globaldata, page_builder, is_cf_pro },
		dispatch,
	] = useStateValue();
	const [ { settingsProcess }, setSettingsStatus ] = useSettingsValue();
	var general_settings = globaldata.settings[ 'general' ];

	const handleFormSubmit = function ( event ) {
		event.preventDefault();

		let formData = new window.FormData( event.target );

		formData.append( 'action', 'uag_save_global_settings' );
		formData.append(
			'security',
			uag_react.save_global_settings_nonce
		);
		formData.append( 'setting_tab', 'general_settings' );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
			/* Update settings state */
			setSettingsStatus( { status: 'SAVED' } );

			if ( data.success ) {
				apiFetch( {
					path: '/uag/v1/admin/commonsettings/',
				} ).then( ( data ) => {
					console.log( data );
					dispatch( {
						type: 'SET_SETTINGS',
						commondata: data,
					} );
					dispatch( {
						type: 'SET_PAGE_BUILDER',
						pagebuilder:
							data.options[
								'_uag_common[default_page_builder]'
							],
					} );
				} );
			} else {
				console.log( 'Error' );
			}
		} );
	};

	return (
		<form className="wcf-general-settings" onSubmit={ handleFormSubmit }>
			<h3 className="wcf-general-settings__title">
				{ __( 'General Settings', 'ultimate-addons-for-gutenberg' ) }
			</h3>
			<SettingTable
				settings={ general_settings }
				meta_key="_uag_common"
			/>
			<div className="wcf-general-settings__save-button">
				<SubmitButton />
			</div>
		</form>
	);
}

export default GeneralSettings;
