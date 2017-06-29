# install git
sudo apt-get update
sudo apt-get install -y git git-core

# install nvm
sudo apt-get install -y curl
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash
echo "source /home/vagrant/.nvm/nvm.sh" >> /home/vagrant/.profile
source /home/vagrant/.profile

# install node 5.10.0
nvm install 5.10.0
nvm alias default 5.10.0

# git clone donderstarter
cd /var/www/project
git clone https://github.com/Cloudoki/react-redux-donderstarter.git

# create a directory to store the data at and symlink it
mkdir /home/vagrant/node_modules
cd /var/www/project/react-redux-donderstarter
ln -s /home/vagrant/node_modules node_modules
npm install
# npm run dev
