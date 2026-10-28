<?php
// Copy this file to the Plesk vhost private folder, outside httpdocs:
// /var/www/vhosts/goldenfortunelife.com/private/config.php
// Never put this file inside httpdocs, git, or the zip you upload into the website root.
return [
    'dsn' => 'pgsql:host=127.0.0.1;port=5432;dbname=your_database',
    'user' => 'gfl_website',
    'password' => 'set-in-this-private-file-only',
];
