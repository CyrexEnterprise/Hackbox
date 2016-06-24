#!/usr/bin/env bash

# install git
sudo apt-get update
sudo apt-get install -y git ant expect

# install nvm
sudo apt-get install -y git-core curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install node 4.4.5 LTS
nvm install 4.4.5
nvm alias default 4.4.5

# install cordova and ionic (beta version) globally
npm install -g cordova
npm install -g ionic@beta

# create a directory to store the data at and symlink it to home
cd /vagrant
mkdir -p hacks
cd ~
test -L hacks || ln -s /vagrant/hacks hacks

# add plugin to folder
cd hacks
expect -c '
set timeout -1   ;
spawn ionic start geohack blank
expect {
    "Would you like to overwrite the directory with this new project?" {
      exp_send "yes\r" ; exp_continue
    }
    "Create an Ionic Platform account to add features like User Authentication, Push Notifications, Live Updating, iOS builds, and more?" {
      exp_send "n\r" ; exp_continue
    }
}
'
cd geohack
ionic plugin add cordova-plugin-geolocation
