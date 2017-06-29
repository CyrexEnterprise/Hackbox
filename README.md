## Installation
Install the latest version of [Vagrant](https://www.vagrantup.com/downloads.html) and also install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) (this will be our provider).


## Run box
```
$ vagrant up
```

Start coding in the repository path and all the files will be synced with the /vagrant path in the guest box

If you need to run any program in the box, just SSH it:

```
$ vagrant ssh
```

If you need to completely remove:

```
$ vagrant destroy
$ vagrant box remove ubuntu/trusty64
```

In your home directory should be a folder named `hacks` where you can start creating your hacks.
(this folder should be linked to an `hacks` folder in the root of this repository)

## Start using
To start using:
- enter vagrant
- enter the `react-redux-donderstarter` folder
- run `npm run dev`

```
vagrant ssh
cd /var/www/project/react-redux-donderstarter/
npm run dev
```

- open your browser in ```http://localhost:9000/```
- start hacking

**Happy Coding**

### Note:

Use `exit` to logout of the vagrant box.