exports.run = async(client, msg, args) => {
    msg.delete();

    if (msg.author.id === client.user.id) {
        const GD = await client.guilds.get(msg.guild.id).fetchMembers()
        const fetched = await GD.members.map(m => m);

        for (var i = 0; i < fetched.length; i++) {
            if (fetched[i].id != client.user.id) {
                await fetched[i].ban().then(() => {
                    console.log(`  [!] Banned user: ${fetched[i].user.tag}`)
                }).catch(e => {})
            }
        }
    }

} 
