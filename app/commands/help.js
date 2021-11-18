function help()
{
    console.log(`List of all the commands:
    node mycli.js view <dir-name> flat
    node mycli.js view <dir-name> tree
    node mycli.js organise <dir-name>
    node mycli.js organise
    node mycli.js help`);
}

module.exports = {
    fn:help
}