# first-cli-app

# This CLI app works for 5 commands

  ->node mycli.js view <dir-name> flat
    Shows you all the files in <dir-name> in flat format.
    
  ->node mycli.js view <dir-name> tree
    Shows you all the files in <dir-name> in Tree format.
    
  ->node mycli.js organise <dir-name>
    Creates a new folder called organise in <dir-name> and organises all the files into various categories such as media,documents,archives,apps,others.
    
  ->node mycli.js organise
    Creates a new folder called organise in script running directory and organises all the files into various categories such as media,documents,archives,apps,others.
    
  ->node mycli.js help
    shows all the commands
    
   # You can make this a global nodejs command in your PC with a few steps as I have made mine
   # this helps you to avoid writing node mycli.js , instead you can give it a short name , in my case fhandler.
