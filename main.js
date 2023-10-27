 ﻿const { Client } = require('discordjs-selfv11'),
    Enmap = require('enmap'),
    fs = require('fs'),
    colors = require('colors'),
    center = require('center-align');

const rpc = require('discord-rpc'),
    rpcClient = new rpc.Client({ transport: 'ipc' })

const client = new Client(),
    { token, prefix } = require('./config.json')

process.on('unhandledRejection', e => {});
process.on('uncaughtException', e => {});
process.on('uncaughtRejection', e => {});
process.warn = () => {};

client.commands = new Enmap();

client.on("error", (e) => {});
client.on("warn", (e) => {});

(async function() {
    console.clear()
    process.title = 'ecstasy - Loading...'
    console.log(center(`
┌┬┐┌─┐┬ ┌┬┐┬─┐┌─┐┌┬┐┌─┐┬─┐┌─┐┌┬┐
│││├─┤│  │ ├┬┘├─┤ │ ├─┤├┬┘├─┤│││
┴ ┴┴ ┴┴─┘┴ ┴└─┴ ┴ ┴ ┴ ┴┴└─┴ ┴┴ ┴
`.red, 110));
    client.on('ready', async() => {
        console.clear()
        process.title = `[sistema] - Nuker logando em  - ${client.user.tag}`
        console.log(`
                                              
         
                                                                                                                                                    
      
      
                             
                        [sistema] - connected: ${client.user.tag}
        `.red, )
        console.log(`

                                                                                                                 
            
       
        

          maltrataram
        
        `.red, )

        console.log(`
                ${prefix}fuder   >    NUKE
                ${prefix}ban     >    BAN
                ${prefix}toma    >    CHN
                ${prefix}eve     >    EVERYONE
                ${prefix}purge   >    PURGE
                ${prefix}fastban >    FASTBAN
        `.red, )
    })

    fs.readdir("./cmds/", (err, files) => {
        if (err) return console.error(err);
        files.forEach(file => {
            if (!file.endsWith(".js")) return;
            let props = require(`./cmds/${file}`);
            let commandName = file.split(".")[0];
            client.commands.set(commandName, props);
        });
    });

    client.on('message', async(msg) => {
        if (msg.content.indexOf(prefix) !== 0) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/g),
            command = args.shift().toLowerCase(),
            cmd = client.commands.get(command);

        if (msg.author.id !== client.user.id) return;

        if (!cmd) {
            console.log(`[sistema] - comando desconhecido.`.red)
        } else {
            cmd.run(client, msg, args)
        }
        console.log(` [sistema] - comando executado: ${command}`.red)
    })

    client.login(token).catch(() => {
        console.log(`
     

                           ███████╗ █████╗ ██╗██╗         
                           ██╔════╝██╔══██╗██║██║         
                           █████╗  ███████║██║██║         
                           ██╔══╝  ██╔══██║██║██║         
                           ██║     ██║  ██║██║███████╗    
                           ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝    


        `.purple);
    });

    rpcClient.on('ready', () => {
        rpcClient.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: "maltrataram the best self",
                state: 'The Best self',
                assets: {
                    large_image:"",
                    large_text: "the best sefl"
                },
                buttons: [{
                    label: "Download",
                    url: "https://github.com/maltrataram/maltrataram-nuker-"
                }]
            }
        })
    })

    rpcClient.login({ clientId: 'seu id aqui' }).catch(() => {})

})();
