# Basic Usage
Add to your .env file the names of the mailers to configure remember that by default use as separator ` | `:
```
MAIL_MAILER=test|prod
MAIL_DRIVER=smtp|smtp
MAIL_HOST=smtp.mailtrap.io|mail.mydomain.com
MAIL_PORT=2525|2665
MAIL_USERNAME=xxxxxxxxxxxxx|xxxxxxxxxxxxx
MAIL_PASSWORD=xxxxxxxxxxx|xxxxxxxxxxx
MAIL_FROM_ADDRESS=test1@test.com|xxxxxxxx@mydomain.com
MAIL_FROM_NAME=Test1|xxxxxxxx@mydomain.com
MAIL_ENCRYPTION=null|TLS
```
As seen in the `laravel-mailers` configuration uses the same environment variables as Laravel, just add` MAIL_MAILER` which assigns the names of the mailers:

## Default Mailer
The default mailer is the first in this case `test`:
```
MAIL_MAILER=test|prod
```

## Examples
Usar mailer `test`:
```php
Mail::to('test@test.com')
    ->send(new SendAttachmentDocument());

//  or
Mail::mailer('test')
    ->to('test@test.com'])
    ->send(new SendAttachmentDocument());
```

Usar mailer `prod`:
```php
Mail::mailer('prod')
    ->to('test@test.com'])
    ->send(new SendAttachmentDocument());
```
