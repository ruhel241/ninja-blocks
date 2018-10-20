<?php
/**
 * Plugin Name: Ninja Blocks — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: ninja-blocks — is a Gutenberg plugin created via create-guten-block.
 * Author: Ruhel Khan
 * Author URI: https://ruhel.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */


function ninja_blockcs_loader(){
	/**
	 * Load the blocks functionality
	*/
	require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
} 
add_action('plugins_loaded','ninja_blockcs_loader');


/**
 * Load the plugin textdomain
 */
function ninja_blocks_init(){
	load_plugin_textdomain('ninja-blocks', false, basename( dirname( __FILE__ ) ) . '/languages' );
}
add_action('init','ninja_blocks_init');
