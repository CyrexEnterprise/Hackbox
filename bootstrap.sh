#!/usr/bin/env bash
# Variables
APPENV=local
DBHOST=localhost
DBNAME=rfid
DBUSER=tui
DBPASSWD=tui

# git, expect
sudo apt-get update
sudo apt-get install -y git expect debconf-utils

# MySQL
echo -e "\n--- Install MySQL specific packages and settings ---\n"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $DBPASSWD"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $DBPASSWD"
sudo apt-get install -y mysql-server-5.5
echo -e "\n--- Setting up our MySQL user and db ---\n"
mysql -uroot -p$DBPASSWD -e "CREATE DATABASE $DBNAME"
mysql -uroot -p$DBPASSWD -e "grant all privileges on $DBNAME.* to '$DBUSER'@'localhost' identified by '$DBPASSWD'"

# nginx
echo -e "\n--- Install NGINX ---\n"
sudo apt-get -y install nginx
sudo service nginx start

# install composer
echo -e "\n--- Install PHP, Composer ---\n"
sudo apt-get install -y git-core curl php5-cli php5-mysql
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer

# create a directory to store the data at and symlink it to home
cd /vagrant
mkdir -p hacks
cd ~
test -L hacks || ln -s /vagrant/hacks hacks

# add project to folder
cd hacks
git clone https://github.com/TUIHackfridays/rfid-api.git
cd rfid-api

composer install
sudo cp .env.example .env
expect -c '
set timeout -1   ;
spawn php artisan migrate --seed
expect {
    "Do you really wish to run this command? (yes/no)" {
      exp_send "yes\r" ; exp_continue
    }
}
'

sudo mkdir -p /var/www/tuihackfridays/
test -L /var/www/tuihackfridays/public || sudo ln -s /vagrant/hacks/rfid-api/public /var/www/tuihackfridays/public
sudo chown -R vagrant:www-data /var/www/tuihackfridays/public
sudo chmod 755 /var/www/tuihackfridays
sudo cp /vagrant/nginx/nginx.conf /etc/nginx/sites-available/tuihackfridays
sudo chmod 644 /etc/nginx/sites-available/tuihackfridays
sudo ln -s /etc/nginx/sites-available/tuihackfridays /etc/nginx/sites-enabled/tuihackfridays
sudo service nginx restart
