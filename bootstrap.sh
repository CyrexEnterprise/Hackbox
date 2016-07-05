#!/usr/bin/env bash

# git, expect
sudo apt-get update
sudo apt-get install -y git expect build-essential

# install nvm
sudo apt-get install -y git-core curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install node 6.2.2
nvm install 6.2.2
nvm alias default 6.2.2

# add project to folder

mkdir hacks
cd hacks
sudo cp -vr /vagrant/angular2 ./
sudo chown -R vagrant:vagrant ./
cd angular2
npm install -g typescript typings
npm install

echo "------ done ------"
