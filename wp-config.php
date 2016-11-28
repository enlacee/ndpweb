<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'anb_ndp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
define('FS_METHOD', 'direct');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '|}HHP*V0(KJ>:$Iqx4Jm]hi!s~rECKg5#=L Dm[>#rgtU828N$tY*B1yz&;@bs N');
define('SECURE_AUTH_KEY',  '?9{Z?i5-n8kSa/i?vn)w>|Itjlgx^tstXci< :!SBLi}Y8H;IN.H%S_Z^A$wgY`!');
define('LOGGED_IN_KEY',    'YG5}+~Y=N#%?S8L?r%H&uEl6q.,/Uw#_JcVb=jDK`nN8|yo)Ar[NBJtx*hzvf[dX');
define('NONCE_KEY',        ' K`551;__X82@7{=Fq @4,%X|u3n)h%ZLlS[-}o%qeACU/N?h07x5tP5a<L&w}5x');
define('AUTH_SALT',        'Sh_1vu1vV9 }#ZdO=W,h%!<W;6jEk9|sw.#*-N/L^Yfobb$9f%^g3Gv**[ :mo%^');
define('SECURE_AUTH_SALT', 'I;_1a#~A*L~1}]afd,/FEEo>YAIC;suXNl:OB.WHV5m3)cehW- WqR2H*Hz~N0IL');
define('LOGGED_IN_SALT',   'dBBNi`>bbHd-m0]`mA}!4{@ 9o1@{*aAjktnYzjV!yd*@qzEo|aD yv~Z; b>V31');
define('NONCE_SALT',       '75j<zvDa*QW7TTEjD0D<jhNm=-9%isFCYRoy<I|)L9s/G$X+LTkJK/%)r*ofWSYQ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);
define('DISABLE_WP_CRON', true);
// define('WPLANG', 'es_ES');


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
