<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Ninja Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


// Frontend assets
function ninja_blocks_cgb_block_assets() { 
	// Styles.
	wp_enqueue_style(
		'ninja_blocks-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ) 
	
	);

	// notice Dismiss
	wp_enqueue_script(
		 'nb-notice-box', 
		 plugins_url( 'src/block/block-notice/components/dismiss-notice.js', dirname( __FILE__ ) ),
		 '',
		 '1.0',
		 false
	);


} 
add_action( 'enqueue_block_assets', 'ninja_blocks_cgb_block_assets' );


/**
 * Enqueue backend editor.
*/
function ninja_blocks_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'ninja_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), 
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), 
		true
	);

	// Styles.
	wp_enqueue_style(
		'ninja_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) 
		
	);
} 
add_action( 'enqueue_block_editor_assets', 'ninja_blocks_cgb_editor_assets' );

//Add custom block category
add_filter('block_categories', function($categories) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'ninja-blocks',
				'title' => __('Ninja Blocks','ninja-blocks'),
			),
		)
	);
}, 10, 2 );
