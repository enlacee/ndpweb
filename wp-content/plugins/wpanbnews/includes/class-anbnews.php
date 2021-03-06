<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link        null
 * @since      1.0.0
 *
 * @package    Anbnews
 * @subpackage Anbnews/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Anbnews
 * @subpackage Anbnews/includes
 * @author     Anibal <anibal@pprios.com>
 */
class Anbnews {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Anbnews_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	public $microData;

	private static $instance;

	public static function getInstance()
	{
		 if (!isset(self::$instance)) {
			self::$instance = new self;
		}

		return self::$instance;
	}

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct()
	{
		// variables default
		$this->plugin_name = 'anbnews';
		$this->version = '1.0.0';
		$this->plugin_file = an_get_file_path();
		$this->plugin_dir = an_get_dir_path();

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_admin_custompost_hooks();
		$this->define_public_hooks();

		$this->microData = array(
			'plugin_name'	=> $this->get_plugin_name(),
			'version'		=> $this->get_version(),
			'plugin_file'	=> $this->plugin_file,
			'plugin_dir'	=> $this->plugin_dir
		);
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Anbnews_Loader. Orchestrates the hooks of the plugin.
	 * - Anbnews_i18n. Defines internationalization functionality.
	 * - Anbnews_Admin. Defines all hooks for the admin area.
	 * - Anbnews_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-anbnews-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-anbnews-i18n.php';

		/**
		* load library
		*/
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'library/opengraph/OpenGraph.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-anbnews-admin.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-anbnews-admin-table.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-anbnews-admin-custompost.php';


		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-anbnews-public.php';

		$this->loader = new Anbnews_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Anbnews_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Anbnews_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Anbnews_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

	}

	private function define_admin_custompost_hooks()
	{
		$plugin = new Anbnews_Admin_CustomPost(
			$this->get_plugin_name(),
			$this->get_version(),
			$this->plugin_file
		);
		$this->loader->add_action('init', $plugin, 'create_post_type');
		$this->loader->add_action('init', $plugin, 'create_taxonomy_new');
		$this->loader->add_action('init', $plugin, 'create_taxonomy_agency');
		$this->loader->add_action('init', $plugin, 'create_taxonomy_new_tag');

		$this->loader->add_action('add_meta_boxes', $plugin, 'create_metabox');
		$this->loader->add_action('save_post', $plugin, 'save_metaboxes', 10, 3);
		// setting cron
		$this->loader->add_action('admin_menu', $plugin, 'add_menu');
		//agregar mas horarios y ejecutar el hooks: /wp-cron.php
		$this->loader->add_filter('cron_schedules', $plugin, 'my_add_intervals',10 ,1);
		$this->loader->add_filter('wp_feed_cache_transient_lifetime', $plugin, 'my_cache_filter_handler',10 ,1);

		//crons
		$this->loader->add_action('anbnews_boj_cron_hook',$plugin ,'cron_email_reminder');
		$this->loader->add_action('anbnews_cron_read_feed',$plugin ,'cron_read_feed');
	}

	public static function activate()
	{
		// add cron INSERT noticias
		if (!wp_next_scheduled('anbnews_cron_read_feed')) {
			wp_schedule_event(time(), 'hourly', 'anbnews_cron_read_feed');
		}
	}

	public static function deactivate()
	{
		// remove cron
		if (wp_next_scheduled('anbnews_cron_read_feed')) {
			wp_clear_scheduled_hook('anbnews_cron_read_feed');
		}
	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Anbnews_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Anbnews_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
