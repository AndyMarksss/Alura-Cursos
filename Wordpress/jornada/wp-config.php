<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jornada' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+gqX*|k^bRJs~JO3}spxy(lIi9h&k ^pnAY4Op),})7:pt}PsaUK+!f0g^(NnFhK' );
define( 'SECURE_AUTH_KEY',  'kuw)[hd$m%S=W{^5=K4,&f]$cb#Dob:t](_ZY_wxAl_S=tW81qJj.]^OAs*p|Go#' );
define( 'LOGGED_IN_KEY',    '-2xV-;}?X-m!$}hRUE@t8DQ<3WVg:.x5+{ 7AI6r [.SY3j,GG/Ri<llweP:h3GI' );
define( 'NONCE_KEY',        'q(N6ErA9?,U).2fN$4|N}u(N=Pd$^>WcE9mO3$GVHbx#q%F,!LKzf`p$+iq5^ r/' );
define( 'AUTH_SALT',        '<dckpAG@Pgomo)tgxt[=w!h>xKA$%GBUYy[yL[{uw &15AT1xYeoM$;s`/MF{XCd' );
define( 'SECURE_AUTH_SALT', 'dRPvP&s(c>dk[DiJjc*~`:3n[:}4_<GzRzH7$ZfYY.EJ0v-!y=m`<.f:(CBw:+Zn' );
define( 'LOGGED_IN_SALT',   'H_%:jjloBt5FsL?&+qU/(bfo`SftNHAZWkZmPtm$X!#j6=,>)hZvU]MqViR/gFG2' );
define( 'NONCE_SALT',       '9TG{1Hb8d>8(;v{tBiZDt nsNVLEu^&CGyE*o5~xi3Z+U?;oqo}EbtvGyP5!H5aV' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'jvwp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
