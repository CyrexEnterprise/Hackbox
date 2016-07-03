#!/usr/bin/env bash

# git, expect
sudo apt-get update
sudo apt-get install -y git expect build-essentials

# install nvm
sudo apt-get install -y git-core curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install node 6.2.2
nvm install 6.2.2
nvm alias default 6.2.2

# create a directory to store the data at and symlink it to home
cd /vagrant
mkdir -p hacks
cd ~
test -L hacks || ln -s /vagrant/hacks hacks

# add project to folder
cd hacks
sudo cp -vr ../react ./
cd react
npm install -g webpack babel --no-optional
npm install --no-optional --no-bin-links

echo "------ done ------"
