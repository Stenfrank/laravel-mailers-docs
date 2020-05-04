# Laravel Mailers
Laravel Mailers is a package for Laravel 7.0 and higher, which configures different transports ("smtp", "sendmail", "mailgun", "ses", "postmark", "log", "array") without modifying our mail.php.

## Installation
Laravel Mailers can be installed via composer:
```sh
composer require stenfrank/laravel-mailers
```
The package will automatically register a service provider.

Optionally you can publish the package configuration using:
```sh
php artisan vendor:publish --provider="Stenfrank\LaravelMailers\LaravelMailersServiceProvider" --tag="config"
```
This is the default content of the config file that will be published as `config/mails.php`:
```php
return [
    /*
    |--------------------------------------------------------------------------
    | Mailers
    |--------------------------------------------------------------------------
    | Here you can provide the names of your mailers.
    |
    */
    'mailers' => explode('|', env('MAIL_MAILER', 'default')),

    /*
    |--------------------------------------------------------------------------
    | Mail Transport Driver
    |--------------------------------------------------------------------------
    |
    | Laravel supports both SMTP and PHP's "mail" function as drivers for the
    | sending of e-mail. You may specify which one you're using throughout
    | your application here. By default, Laravel is setup for SMTP mail.
    |
    | Supported: "smtp", "sendmail", "mailgun", "ses",
    |            "postmark", "log", "array"
    |
    */
    'transports' => explode('|', env('MAIL_DRIVER', 'smtp')),

    /*
    |--------------------------------------------------------------------------
    | SMTP Host Address
    |--------------------------------------------------------------------------
    |
    | Here you may provide the host address of the SMTP server used by your
    | applications. A default option is provided that is compatible with
    | the Mailgun mail service which will provide reliable deliveries.
    |
    */

    'hosts' => explode('|', env('MAIL_HOST', 'smtp.mailgun.org')),

    /*
    |--------------------------------------------------------------------------
    | SMTP Host Port
    |--------------------------------------------------------------------------
    |
    | This is the SMTP port used by your application to deliver e-mails to
    | users of the application. Like the host we have set this value to
    | stay compatible with the Mailgun e-mail application by default.
    |
    */

    'ports' => explode('|', env('MAIL_PORT', 587)),

    /*
    |--------------------------------------------------------------------------
    | Global "From" Address
    |--------------------------------------------------------------------------
    |
    | You may wish for all e-mails sent by your application to be sent from
    | the same address. Here, you may specify a name and address that is
    | used globally for all e-mails that are sent by your application.
    |
    */

    'froms' => [
        'address' => explode('|', env('MAIL_FROM_ADDRESS', 'hello@example.com')),
        'name' => explode('|',env('MAIL_FROM_NAME', 'Example')),
    ],

    /*
    |--------------------------------------------------------------------------
    | E-Mail Encryption Protocol
    |--------------------------------------------------------------------------
    |
    | Here you may specify the encryption protocol that should be used when
    | the application send e-mail messages. A sensible default using the
    | transport layer security protocol should provide great security.
    |
    */

    'encryptions' => explode('|', env('MAIL_ENCRYPTION', 'tls')),

    /*
    |--------------------------------------------------------------------------
    | SMTP Server Username
    |--------------------------------------------------------------------------
    |
    | If your SMTP server requires a username for authentication, you should
    | set it here. This will get used to authenticate with your server on
    | connection. You may also set the "password" value below this one.
    |
    */

    'usernames' => explode('|', env('MAIL_USERNAME')),

    'passwords' => explode('|', env('MAIL_PASSWORD')),
];

```

## Questions and issues
Find yourself stuck using the package? Found a bug? Do you have general questions or suggestions for improving laravel-websockets? Feel free to create an issue on [GitHub](https://github.com/Stenfrank/laravel-mailers/issues), we'll try to address it as soon as possible.

If you've found a bug regarding security please mail [stenfrank@soenac.com](mailto:stenfrank@soenac.com) instead of using the issue tracker.