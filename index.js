const Discord = require("discord.js"); 
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const Parser = require("expr-eval").Parser
const mysql = require("mysql")
const ms = require("ms")

bot.login(process.env.token);

var con = mysql.createPool({
    host: process.env.db_host,
    port: 3306,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
})

bot.on("ready", () =>{
    bot.user.setActivity("Bot Ufficiale - !help per aiuto", { type : "PLAYING" })
})




bot.on("message", (message) =>{
    if (message.content == "!time") {
        var data = new Date();
        var ora = data.getHours();
        var minuto = data.getMinutes();

        message.channel.send("ORA ATTUALE :alarm_clock: : " + ora + ":" + minuto);
            }
           
});

bot.on("message", message => {
    if (message.content.startsWith("!ban")) {
        var utenteKick = message.mentions.members.first();

        var Mod = message.author

        var args = message.content.split(/\s+/);
            var reason = "";
                if (args.length == 2) { //Se non viene inserito un motivo
                    reason = "Nessun motivo";
                }
                else {
                    for (var i = 2; i < args.length; i++) {
                        reason += args[i] + " "
                    }
                }

                var embedban = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("**Utente Bannato dal Server**")
        .setAuthor("The Casa Bot")
        .setDescription("L'utente <@" + utenteKick + "> è stato bannato dal server.")
        .setThumbnail("https://iili.io/qugvxp.png")
        .addField("**Motivo**", reason, true)
        .addField("**Moderatore**", Mod, true)
        .setFooter("Gli utenti bannati non possono più riunirsi al server.")
        .setTimestamp();


        if (!message.member.hasPermission('BAN_MEMBERS')) { //Controllare che l'utente abbia il permesso di bannare
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteKick) {
            message.channel.send('Non hai menzionato nessun utente'); //Controllare che sia stato menzionato un utente
            return;
        }

        if (!message.mentions.members.first().kickable) { //Controllare che il bot abbia il permesso di bannare
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteKick.ban()
            .then(() => message.channel.send(embedban))
    }
})

bot.on("message", message => {
    if (message.content.startsWith("!kick")) {
        var utenteKick = message.mentions.members.first();
        var Mod = message.author
        var args = message.content.split(/\s+/);
            var reason = "";
                if (args.length == 2) { //Se non viene inserito un motivo
                    reason = "Nessun motivo";
                }
                else {
                    for (var i = 2; i < args.length; i++) {
                        reason += args[i] + " "
                    }
                }

                var embedban = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("**Utente Kicckato dal Server**")
        .setAuthor("The Casa Bot")
        .setDescription("L'utente <@" + utenteKick + "> è stato kicckato dal server.")
        .setThumbnail("https://iili.io/qiijse.th.png")
        .addField("**Motivo**", reason, true)
        .addField("**Moderatore**", Mod, true)
        .setFooter("Gli utenti kicckati possono riunirsi nel server")
        .setTimestamp();


        if (!message.member.hasPermission('KICK_MEMBERS')) { //Controllare che l'utente abbia il permesso di bannare
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteKick) {
            message.channel.send('Non hai menzionato nessun utente'); //Controllare che sia stato menzionato un utente
            return;
        }

        if (!message.mentions.members.first().kickable) { //Controllare che il bot abbia il permesso di bannare
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteKick.kick()
            .then(() => message.channel.send(embedban))
    }
});

bot.on("message", message => {
    if (message.content.startsWith("!mute")) {
        var utenteKick = message.mentions.members.first();
        var Mod = message.author
        var args = message.content.split(/\s+/);
            var reason = "";
                if (args.length == 2) { //Se non viene inserito un motivo
                    reason = "Nessun motivo";
                }
                else {
                    for (var i = 2; i < args.length; i++) {
                        reason += args[i] + " "
                    }
                }

                var embedmute = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("**Utente Mutato**")
        .setAuthor("The Casa Bot")
        .setDescription("L'utente <@" + utenteKick + "> è stato mutato.")
        .setThumbnail("https://iili.io/qiijse.th.png")
        .addField("**Motivo**", reason, true)
        .addField("**Moderatore**", Mod, true)
        .setFooter("Gli utenti mutati non possono aggiungere reazioni, scrivere e parlare")
        .setTimestamp();


        if (!message.member.hasPermission('BAN_MEMBERS')) { //Controllare che l'utente abbia il permesso di bannare
            message.channel.send('Non hai il permesso');
            return;
        }

        if (!utenteKick) {
            message.channel.send('Non hai menzionato nessun utente'); //Controllare che sia stato menzionato un utente
            return;
        }

        if (!message.mentions.members.first().kickable) { //Controllare che il bot abbia il permesso di bannare
            message.channel.send('Io non ho il permesso');
            return
        }

        utenteKick.roles.add("826028996978278421")
            .then(() => message.channel.send(embedmute))
    }
});

bot.on("message", message => {
    if (message.content.startsWith("!warn")) {
        var utenteKick = message.mentions.members.first();
        var Mod = message.author
        var args = message.content.split(/\s+/);
            var reason = "";
                if (args.length == 2) { //Se non viene inserito un motivo
                    reason = "Nessun motivo";
                }
                else {
                    for (var i = 2; i < args.length; i++) {
                        reason += args[i] + " "
                    }
                }

                var embedwarn = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("**Utente Avvisato (Warn)**")
        .setAuthor("The Casa Bot")
        .setDescription("L'utente <@" + utenteKick + "> è stato Warnato")
        .setThumbnail("https://iili.io/qiiNqu.th.png")
        .addField("**Motivo**", reason, true)
        .addField("**Moderatore**", Mod, true)
        .setFooter("Il limite raggiungibile è di 2 warn")
        .setTimestamp();


        if (utenteKick.roles.cache.has('MENAGE_MEMBERS')) { //Controllare che l'utente abbia il permesso di bannare
            var embednonhaipermesso = new Discord.MessageEmbed()
            .setTitle("**Non hai il permesso di utilizzare questo comando!**")
            message.channel.send(embednonhaipermesso);
            return;
        }

        if (!utenteKick) {
            var embednonhaimenzionato = new Discord.MessageEmbed()
            .setTitle("**Non hai menzionato nessun utente!**")
            message.channel.send(embednonhaimenzionato); //Controllare che sia stato menzionato un utente
            return;
        }

        if (!message.mentions.members.first().kickable) { //Controllare che il bot abbia il permesso di bannare
            var embednonhopermesso = new Discord.MessageEmbed()
            .setTitle("**Non ho il permesso di utilizzare questo comando! Controlla le impostazioni del ruolo 'LoSceriffo'**")
            message.channel.send(embednonhopermesso);
            return
        }

        if (!utenteKick.roles.cache.has("826028884092387369")) {
            (utenteKick.roles.add("826028884092387369"))
            message.channel.send(embedwarn);
            return;
        }

        if (utenteKick.roles.cache.has("826028884092387369"));{ //Controllare che l'utente abbia il permesso di bannare
            utenteKick.roles.add("826028996978278421");
            message.channel.send(embedwarn);
            
        }

        if (utenteKick.roles.cache.has("826028996978278421")) {

            var embedban = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("**Utente bannato dal Server**")
        .setAuthor("Lo Sceriffo")
        .setDescription("L'utente <@" + utenteKick + "> è stato bannato dal server a causa del raggiungimento di 3 Warn.")
        .setThumbnail("https://iili.io/qiihX9.th.png")
        .addField("**Motivo**", reason, true)
        .addField("**Moderatore**", Mod, true)
        .setFooter("Il limite raggiungibile è di 2 warn")
        .setTimestamp();

        

            utenteKick.ban()
            .then(() => message.channel.send(embedban))
            return;

        }
        
        

    }
});

bot.on("message", message => {
    if (message.content.startsWith("!send-anon")) {
        var args = message.content.split(/\s+/);
        var messaggio = "";
            if (args.length == 4) { //Se non viene inserito un motivo
                messaggio = "Nessun mmessaggio";
            }
            else {
                for (var i = 3; i < args.length; i++) {
                    messaggio += args[i] + " "
                }
            }
            var Sesso = args[1];
            var Eta = args[2];

        var id_canale = bot.channels.cache.get("829999967279513640")

        var embed = new Discord.MessageEmbed()
        .setColor("#f4a91f")
        .setTitle("**Nuovo Messaggio Anonimo**")
        .setAuthor("Anonimo")
        .setThumbnail("https://images.emojiterra.com/twitter/v13.0/512px/1f92b.png")
        .addField("**Sesso**", Sesso, false)
        .addField("**Età**", Eta, false)
        .addField("**Messaggio:**", messaggio, false)
        .setTimestamp();

        message.channel.bulkDelete("1", true)

        id_canale.send(embed);
        }
});

//Messaggio di benvenuto
bot.on("guildMemberAdd", (member) => {
    //console.log(member.guild); Per avere tutte le info del server

    var embedwelcome = new Discord.MessageEmbed()
        .setColor("#008f39")
        .setTitle("**Benvenuto!**")
        .setDescription("Benvenuto " + member.toString() + "in The Casalegno Community! Leggi prima di tutto le regole in <#823490923878678528>")
        .setThumbnail("https://cdn.mee6.xyz/guild-images/823488617887563796/5ce66474948dd3476275b15babc0f70959645d5ce61d307087377481eb8f00ba.png")
        .addField("**Membro**", member.guild.memberCount, false)
        .setTimestamp();

    bot.channels.cache.get("823489809627611148").send(embedwelcome);
})

bot.on("message", message => {
    if (message.content.startsWith("!userinfo")) {
        if (message.content == "!userinfo") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }

        if (!utente) {
            message.channel.send("Non ho trovato questo utente")
            return
        }

        var elencoPermessi = "";
        if (utente.hasPermission("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        else {
            var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"]

            for (var i = 0; i < permessi.length; i++) {
                if (utente.hasPermission(permessi[i])) {
                    elencoPermessi += "- " + permessi[i] + "\r";
                }
            }
        }

        var embeduserinfo = new Discord.MessageEmbed()
            .setTitle("Info su " + utente.user.tag)
            .setDescription("Tutte le informazioni di questo utente")
            .setThumbnail(utente.user.avatarURL())
            .setColor("008f39")
            .addField("User id", utente.user.id, true)
            .addField("Stato", utente.user.presence.status, true)
            .addField("È un bot?", utente.user.bot ? "Si" : "No", true)
            .addField("Account creato", utente.user.createdAt.toDateString(), true)
            .addField("Unito in questo server dal", utente.joinedAt.toDateString(), true)
            .addField("Ruoli", utente.roles.cache.map(ruolo => ruolo.name).join("\r"), false)

        message.channel.send(embeduserinfo)
    }
})

bot.on("message", message => {
    if (message.content.startsWith("!userpermissions")) {
        if (message.content == "!userinfo") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }

        if (!utente) {
            message.channel.send("Non ho trovato questo utente")
            return
        }

        var elencoPermessi = "";
        if (utente.hasPermission("ADMINISTRATOR")) {
            elencoPermessi = "👑 ADMINISTRATOR";
        }
        else {
            var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS", "MANAGE_EMOJIS"]

            for (var i = 0; i < permessi.length; i++) {
                if (utente.hasPermission(permessi[i])) {
                    elencoPermessi += "- " + permessi[i] + "\r";
                }
            }
        }

        var embeduserpermission = new Discord.MessageEmbed()
            .setTitle("I permessi di " + utente.user.tag)
            .setDescription("Tutti i permessi di questo utente")
            .setThumbnail(utente.user.avatarURL())
            .setColor("008f39")
            .addField("User id", utente.user.id, true)
            .addField("Permessi:", elencoPermessi, false)

        message.channel.send(embeduserpermission)
    }
})

bot.on("message", message => {
    if (message.content.startsWith("!avatar")) {
        if (message.content.trim() == "!avatar") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
        }

        if (!utente) {
            message.channel.send("Utente non trovato")
        }

        var embedavatar = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setDescription("L'avatar di questo utente")
            .setImage(utente.user.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))

        message.channel.send(embedavatar)
    }
})

bot.on("guildMemberAdd", member => { //Update canale quando entra un utente dal server
    var canale = bot.channels.cache.get("838117609840574554")
    canale.setName("👾│membri: " + member.guild.memberCount)
});
bot.on("guildMemberRemove", member => { //Update canale quando esce un utente dal server
    var canale = bot.channels.cache.get("838117609840574554")
    canale.setName("👾│membri: " + member.guild.memberCount)
});


bot.on("message", message => {
    if(message.content == "!ticket") {
    message.channel.send("Clicca sulla reazione per aprire un ticket e richiedere assistenza")
    .then(msg => msg.react("📨"))
};
})

bot.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction._emoji.name == "📨") {
        if (messageReaction.message.channel.id == "826010057387802664") {
            messageReaction.users.remove(user);
            var server = messageReaction.message.channel.guild;
            if (server.channels.cache.find(canale => canale.topic == `User ID: ${user.id}`)) {
                user.send("Hai gia un ticket aperto").catch(() => { })
                return
            }

            server.channels.create(user.username + " help", {
                type: "text"
            }).then(canale => {
                canale.setTopic(`User ID: ${user.id}`);
                canale.setParent("825689164384436244")
                canale.overwritePermissions([
                    {
                        id: server.id,
                        deny: ["VIEW_CHANNEL"]
                    },
                    {
                        id: user.id,
                        allow: ["VIEW_CHANNEL"]
                    }
                ])
                var embed = new Discord.MessageEmbed()
                .setTitle("Grazie " + user.tag + " di aver aperto un ticket")
                .setDescription("Attendi l'arrivo di un moderatore per comunicare il tuo problema")
                .setColor("#008080") 

                canale.send(embed)
            })
        }
    }
})

bot.on("message", message => {
    if (message.content == "!close") {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }

        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                message.channel.delete();
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }

    if (message.content.startsWith("!add")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }

        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }

                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)

                if (haIlPermesso) {
                    message.channel.send("Questo utente ha gia accesso al ticket")
                    return
                }

                message.channel.updateOverwrite(utente, {
                    VIEW_CHANNEL: true
                })

                message.channel.send(`${utente.toString()} è stato aggiunto al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
    if (message.content.startsWith("!remove")) {
        var topic = message.channel.topic;
        if (!topic) {
            message.channel.send("Non puoi utilizzare questo comando qui");
            return
        }

        if (topic.startsWith("User ID:")) {
            var idUtente = topic.slice(9);
            if (message.author.id == idUtente || message.member.hasPermission("MANAGE_CHANNELS")) {
                var utente = message.mentions.members.first();
                if (!utente) {
                    message.channel.send("Inserire un utente valido");
                    return
                }

                var haIlPermesso = message.channel.permissionsFor(utente).has("VIEW_CHANNEL", true)

                if (!haIlPermesso) {
                    message.channel.send("Questo utente non ha gia accesso al ticket")
                    return
                }

                if (utente.hasPermission("MANAGE_CHANNELS")) {
                    message.channel.send("Non puoi rimuovere questo utente")
                    return
                }

                message.channel.updateOverwrite(utente, {
                    VIEW_CHANNEL: false
                })

                message.channel.send(`${utente.toString()} è stato rimosso al ticket`)
            }
        }
        else {
            message.channel.send("Non puoi utilizzare questo comando qui")
        }
    }
})

var canaleCounting = "823493122314731570"
bot.on("message", message => {
        con.query("SELECT * FROM server", (err, result) => {
                if (err) {
                        console.log(err)
                        return
                }
                var server = result[0]
                con.query("SELECT * FROM user", (err, result) => {
                        if (err) {
                                console.log(err)
                                return
                        }

                        var userList = result;

                        if (message.channel == canaleCounting) {
                                try {
                                        var numero = Parser.evaluate(message.content)

                                        var index = userList.findIndex(x => x.id == message.author.id)
                                        if (index < 0) {
                                                var index = userList.lenght;
                                                userList[index] = {
                                                        id: message.author.id,
                                                        username: message.member.user.tag,
                                                        lastScore: 0,
                                                        bestScore: 0,
                                                        correct: 0,
                                                        incorrect: 0
                                                }

                                                con.query("INSERT INTO user VALUES (" + message.author.id + ",'" + message.member.user.tag + "', 0, 0, 0, 0)", (err) => {
                                                        if (err) {
                                                                console.log(err)
                                                                return
                                                        }
                                                })
                                        }
                                        var user = userList[index];

                                        if (message.author.id == server.ultimoUtente) {
                                                message.react("❌")

                                                var embederrore = new Discord.MessageEmbed()
                                                .setTitle("ERRORE!")
                                                .setDescription("Ogni utente può inviare un solo numero alla volta!")
                                                .setColor("ff0000")
                                                message.channel.send(embederrore)

                                                user.incorrect = user.incorrect + 1;

                                                server.numero = 0;
                                                server.ultimoUtente = "NessunUtente";
                                                server.bestScore = server.bestScore;
                                        }
                                        else if (numero - 1 != server.numero) {
                                                message.react("❌")

                                                var embederrore = new Discord.MessageEmbed()
                                                .setTitle("ERRORE!")
                                                .setDescription("Numero errato! Prossimo numero: 1")
                                                .setColor("ff0000")
                                                message.channel.send(embederrore)

                                                user.incorrect = user.incorrect + 1;

                                                server.numero = 0;
                                                server.ultimoUtente = "NessunUtente";
                                                server.bestScore = server.bestScore;
                                        }
                                        else {
                                                numero >= server.bestScore ? message.react("☑️") : message.react("✅")

                                                server.numero = server.numero + 1;
                                                server.ultimoUtente = message.author.id;
                                                numero >= server.bestScore ? server.bestScore = numero : server.bestScore = server.bestScore

                                                user.lastScore = numero;
                                                numero >= user.bestScore ? user.bestScore = numero : user.bestScore = user.bestScore;
                                                user.correct = user.correct + 1
                                        }

                                        updateDatabase(user, server)

                                } catch {

                                }
                        }

                        if (message.content.startsWith("!cuser")) {
                                if (message.content == "!cuser") {
                                        var utente = message.member;
                                }
                                else {
                                        var utente = message.mentions.members.first()
                                }

                                if (!utente) {
                                        message.channel.send("Utente non trovato");
                                        return
                                }

                                var index = userList.findIndex(x => x.id == message.author.id)
                                if (index < 0) {
                                        message.channel.send("Questo utente non ha mai giocato a Couting")
                                        return
                                }

                                var user = userList[index]

                                var leaderboard = userList.sort((a, b) => (a.bestScore < b.bestScore) ? 1 : ((b.bestScore < a.bestScore) ? -1 : 0))
                                var position = leaderboard.findIndex(x => x.id == utente.user.id)

                                var embed = new Discord.MessageEmbed()
                                        .setTitle("COUTING USER STATS")
                                        .setDescription("Tutte le statistiche di questo utente su couting")
                                        .setThumbnail(utente.user.avatarURL())
                                        .addField("Last score", "```" + user.lastScore + "```", true)
                                        .addField("Best score", "```" + user.bestScore + "```", true)
                                        .addField("Position", "```" + position + "```", true)
                                        .addField("Correct", "```" + user.correct + "```", true)
                                        .addField("Incorrect", "```" + user.incorrect + "```", true)

                                message.channel.send(embed)

                        }

                        if (message.content == "!countstats") {
                                var leaderboardList = userList.sort((a, b) => (a.bestScore < b.bestScore) ? 1 : ((b.bestScore < a.bestScore) ? -1 : 0))

                                var leaderboard = "";
                                for (var i = 0; i < 10; i++) {
                                        if (leaderboardList.length - 1 < i) {
                                                break
                                        }
                                        leaderboard += "**#" + (i + 1) + "** - " + leaderboardList[i].username + " - **" + leaderboardList[i].bestScore + "**\r";
                                }

                                var embed = new Discord.MessageEmbed()
                                        .setTitle("COUNTING SERVER STATS")
                                        .setDescription("Tutte le statistiche del server su counting")
                                        .setThumbnail(message.member.guild.iconURL())
                                        .addField("Numero", "```" + server.numero + "```", true)
                                        .addField("Ultimo utente", "```" + server.ultimoUtente != "NessunUtente" ? "```" + server.ultimoUtente + "```" : "```Nessun utente```", true)
                                        .addField("Best score", "```" + server.bestScore + "```", true)
                                        .addField("Leaderboard", leaderboard, false)
                                message.channel.send(embed)

                        }
                })
        })
})


function updateDatabase(user, server) {
        con.query("UPDATE server SET numero = " + server.numero + ", ultimoUtente = '" + server.ultimoUtente + "', bestScore = " + server.bestScore, (err) => {
                if (err) {
                        console.log(err);
                        return
                }
        })

        con.query("UPDATE user SET lastScore = " + user.lastScore + ", bestScore = " + user.bestScore + ", correct = " + user.correct + ", incorrect = " + user.incorrect + " WHERE id = " + user.id, (err) => {
                if (err) {
                        console.log(err);
                        return
                }
        })
}

bot.on("message", message => {
    if (message.author.bot) return
    if (message.channel.type == "dm") return

    con.query("SELECT * FROM userstats", (err, result) => {
            var userstatsList = result;

            if (message.content.startsWith("!rank")) {
                    if (message.content == "!rank") {
                            var utente = message.member;
                    }
                    else {
                            var utente = message.mentions.members.first()
                    }

                    if (!utente) {
                            message.channel.send("Utente non valido")
                            return
                    }


                    var index = userstatsList.findIndex(x => x.id == utente.id);
                    if (index < 0) {
                            message.channel.send("Questo utente non ha esperienza")
                            return
                    }
                    var userstats = userstatsList[index]

                    var progress = "";
                    var nProgress = parseInt(5 * (userstats.xp - calcoloXpNecessario(userstats.level)) / (calcoloXpNecessario(userstats.level + 1) - calcoloXpNecessario(userstats.level)))
                    for (var i = 0; i < nProgress; i++) {
                            progress += ":white_medium_small_square:";
                    }
                    for (var i = 0; i < 5 - nProgress; i++) {
                            progress += ":white_small_square:";
                    }


                    var embed = new Discord.MessageEmbed()
                            .setTitle(utente.user.tag)
                            .setDescription("Il livello di questo utente")
                            .setThumbnail(utente.user.avatarURL())
                            .addField("Level " + userstats.level, progress)

                    message.channel.send(embed)
            }

            if (message.content == "!leaderboard") {
                    var leaderboardList = userstatsList.sort((a, b) => (a.xp < b.xp) ? 1 : ((b.xp < a.xp) ? -1 : 0))

                    var leaderboard = ""
                    for (var i = 0; i < 10; i++) {
                            if (leaderboardList.length - 1 < i) {
                                    break
                            }
                            leaderboard += `**#${i + 1}** ${leaderboardList[i].username} - Level ${leaderboardList[i].level}\r`
                    }

                    var embed = new Discord.MessageEmbed()
                            .setTitle("Leaderboard")
                            .addField("Classifica livelli", leaderboard)

                    message.channel.send(embed)
            }

            var index = userstatsList.findIndex(x => x.id == message.author.id);
            if (index < 0) {
                    index = userstatsList.lenght;

                    userstatsList[index] = {
                            id: message.author.id,
                            username: message.member.user.tag,
                            xp: 0,
                            level: 0,
                            cooldownXp: 0
                    }

                    con.query(`INSERT INTO userstats VALUES ('${message.author.id}', '${message.member.user.tag}', 0, 0, 0)`)
            }

            var userstats = userstatsList[index]

            if (userstats.cooldownXp <= 0) {
                    userstats.cooldownXp = 60;
                    var xp = Math.floor(Math.random() * (40 - 15 + 1)) + 15;
                    userstats.xp += xp

                    if (userstats.xp >= calcoloXpNecessario(userstats.level + 1)) {
                            userstats.level++;

                            var canale = client.channels.cache.get("841251779035660308");
                            canale.send(`${message.author.toString()} hai raggiunto il livello ${userstats.level}`)
                    }

                    con.query(`UPDATE userstats SET level = ${userstats.level}, xp = ${userstats.xp}, cooldownXp = ${userstats.cooldownXp} WHERE id = ${userstats.id}`)
            }
    })
})

function calcoloXpNecessario(level) {
    var xpNecessarioFinoA10 = [0, 70, 250, 370, 550, 840, 1200, 1950, 2500, 3000, 3900]

    if (level < 10) {
            return xpNecessarioFinoA10[level]
    }
    else {
            return level * level * 50
    }
}

setInterval(function () {
    con.query("SELECT * FROM userstats", (err, result) => {
            var userstatsList = result;

            userstatsList.forEach(userstats => {
                    if (userstats.cooldownXp > 0) {
                            userstats.cooldownXp -= 5

                            con.query(`UPDATE userstats SET cooldownXp = ${userstats.cooldownXp} WHERE id = ${userstats.id}`)
                    }
            })
    })
}, 5000)

bot.on("message", message => {
    con.query("SELECT * FROM serverstats", async (err, result) => {
            var tempmute = JSON.parse(result[0].tempmute)
            var tempban = JSON.parse(result[0].tempban)

            if (message.content.startsWith("!tempmute")) {
                    if (!message.member.hasPermission("MUTE_MEMBERS")) {
                            message.channel.send("Non hai il permesso");
                            return
                    }

                    var utente = message.mentions.members.first();
                    if (!utente) {
                            message.channel.send("Utente non valido");
                            return
                    }

                    var ruolo = message.guild.roles.cache.find(role => role.name == "Muted");
                    if (!ruolo) {
                            ruolo = await message.guild.roles.create({
                                    data: {
                                            name: "Muted",
                                            position: 1
                                    }
                            })
                    }
                    ruolo = message.guild.roles.cache.find(role => role.name == "Muted");

                    message.guild.channels.cache.forEach((canale) => {
                            canale.updateOverwrite(ruolo, {
                                    SEND_MESSAGES: false,
                                    ADD_REACTIONS: false,
                                    SPEAK: false 
                            })

                    })

                    if (tempmute.hasOwnProperty(utente.user.id) || utente.roles.cache.has(ruolo)) {
                            message.channel.send("Questo utente è gia mutato")
                            return
                    }

                    var args = message.content.split(/\s+/);
                    var time = args[2];
                    if (!time) {
                            message.channel.send("Inserire un tempo")
                            return
                    }

                    time = ms(time);

                    if (!time) {
                            message.channel.send("Inserire un tempo valido")
                            return
                    }

                    var reason = args.splice(3).join(" ");
                    if (!reason) {
                            reason = "Nessun motivo"
                    }

                    if (utente.hasPermission("ADMINISTRATOR")) {
                            message.channel.send("Non puoi mutare questo utente")
                            return
                    }

                    utente.roles.add(ruolo)

                    tempmute[utente.user.id] = {
                            "time": time / 1000,
                            "reason": reason
                    }

                    message.channel.send(utente.toString() + " è stato mutato\rTime: " + ms(time, { long: true }) + "\rReason: " + reason)

                    con.query("UPDATE serverstats SET tempmute = '" + JSON.stringify(tempmute) + "'")
            }

            if (message.content.startsWith("!tempban")) {
                    if (!message.member.hasPermission("BAN_MEMBERS")) {
                            message.channel.send("Non hai il permesso");
                            return
                    }

                    var utente = message.mentions.members.first();
                    if (!utente) {
                            message.channel.send("Utente non valido");
                            return
                    }

                    if (tempban.hasOwnProperty(utente.user.id)) {
                            message.channel.send("Questo utente è già bannato")
                            return
                    }

                    var args = message.content.split(/\s+/);
                    var time = args[2];
                    if (!time) {
                            message.channel.send("Inserire un tempo")
                            return
                    }

                    time = ms(time);

                    if (!time) {
                            message.channel.send("Inserire un tempo valido")
                            return
                    }

                    var reason = args.splice(3).join(" ");
                    if (!reason) {
                            reason = "Nessun motivo"
                    }

                    if (utente.hasPermission("ADMINISTRATOR")) {
                            message.channel.send("Non puoi bannare questo utente")
                            return
                    }

                    utente.ban({ reason: reason })

                    tempban[utente.user.id] = {
                            "time": time / 1000,
                            "reason": reason
                    }

                    message.channel.send(utente.toString() + " è stato bannato\rTime: " + ms(time, { long: true }) + "\rReason: " + reason)

                    con.query("UPDATE serverstats SET tempban = '" + JSON.stringify(tempban) + "'")
            }
    })
})

setInterval(function () {
    con.query("SELECT * FROM serverstats", (err, result) => {
            var tempmute = JSON.parse(result[0].tempmute)
            var tempban = JSON.parse(result[0].tempban)

            for (var i = 0; i < Object.keys(tempmute).length; i++) {

                    tempmute[Object.keys(tempmute)[i]].time = tempmute[Object.keys(tempmute)[i]].time - 5;

                    if (tempmute[Object.keys(tempmute)[i]].time <= 0) {
                            var server = bot.guilds.cache.get("823488617887563796") //<--- INSERIRE ID DEL SERVER

                            try {
                                    var utente = server.members.cache.find(x => x.id = Object.keys(tempmute)[i]);
                                    var ruolo = server.roles.cache.find(role => role.name == "Muted");
                                    utente.roles.remove(ruolo)
                                    delete tempmute[Object.keys(tempmute)[i]]
                            }
                            catch {
                                    delete tempmute[Object.keys(tempmute)[i]]
                            }

                    }
            }

            for (var i = 0; i < Object.keys(tempban).length; i++) {

                    tempban[Object.keys(tempban)[i]].time = tempban[Object.keys(tempban)[i]].time - 5;

                    if (tempban[Object.keys(tempban)[i]].time <= 0) {
                            var server = client.guilds.cache.get("823488617887563796") //<--- INSERIRE ID DEL SERVER

                            server.members.unban(Object.keys(tempban)[i])

                            delete tempban[Object.keys(tempban)[i]]

                    }
            }

            con.query("UPDATE serverstats SET tempmute = '" + JSON.stringify(tempmute) + "', tempban = '" + JSON.stringify(tempban) + "'");
    })
}, 5000)

bot.on("message", message => {
    if (message.content == "!serverinfo") {
        var server = message.member.guild;

        var botCount = server.members.cache.filter(member => member.user.bot).size;
        var utentiCount = server.memberCount - botCount;

        var categoryCount = server.channels.cache.filter(c => c.type == "category").size
        var textCount = server.channels.cache.filter(c => c.type == "text").size
        var voiceCount = server.channels.cache.filter(c => c.type == "voice").size

        var embed = new Discord.MessageEmbed()
            .setTitle(server.name)
            .setColor("fde910")
            .setDescription("Tutte le info su questo server")
            .setThumbnail(server.iconURL())
            .addField("Proprietario", server.owner.user.username, true)
            .addField("Server id", server.id, true)
            .addField("Regione server", server.region, true)
            .addField("Membri", "Totali: " + server.memberCount + " - Utenti: " + utentiCount + " - Bots: " + botCount, false)
            .addField("Canali", "Categorie: " + categoryCount + " - Testuali: " + textCount + " - Vocali: " + voiceCount, false)
            .addField("Data di creazione", server.createdAt.toDateString() + "```", true)
            .addField("Boost level", "Level " + server.premiumTier + " (Boost: " + server.premiumSubscriptionCount + ")`", true)

        message.channel.send(embed)
    }
})

bot.on("message", message => {
    if (message.content.startsWith("!clear")) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) { //Controllare che l'utente abbia il permesso di cancellare messaggi
            message.channel.send('Non hai il permesso');
            return;
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) { //Controllare che il bot abbia il permesso di cancellare messaggi
            message.channel.send('Non ho il permesso');
            return;
        }

        var count = message.content.slice(7); //Ottenere il numero inserito dall'utente
        count = parseInt(count);

        if (!count) {
            message.channel.send("Inserisci un numero valido")
            return
        }

        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            msg.delete({ timeout: 1000 })
        })

    }
})

bot.on("message", message => {
    if (message.content == "!help") {

        var embedhelp = new Discord.MessageEmbed()
            .setTitle("The Casa Bot Help")
            .setColor("fde910")
            .setDescription("Tutti i comandi di questo bot")
            .addField("`!time`", "per ricevere **l'orario**", true)
            .addField("`!ban`", "*(mod only)* **bannare** un utente", true)
            .addField("`!kick`", "*(mod only)* **kicckare** un utente", true)
            .addField("`!warn`", "*(mod only)* **warnare** un utente", true)
            .addField("`!mute`, tempmute", "*(mod only)* **mutare** un utente", true)
            .addField("`!userinfo`", "Info di un **utente**", true)
            .addField("`!serverinfo`", "info del **server**", true)
            .addField("`!userpermissions`", "info dei **permessi** di un utente", true)
            .addField("`!avatar`", "**l'avatar** di un utente", true)
            .addField("`!cuser`", "*(counting)* **statistiche** counting di un utente", true)
            .addField("`!invite`", "**l'invito** del server. *(verrà spedito in DM)*", true)

        message.channel.send(embedhelp)
    }
})

bot.on("message", message => {
    if (message.content == "!invite") {

        var embedinvite = new Discord.MessageEmbed()
            .setTitle("Invito al Server")
            .setColor("fde910")
            .setDescription("in DM ti è stato spedito il messaggio completo per le partnership")
            .addField("Link invito:", "https://discord.gg/qMWbpksV3E", true)
            
        message.channel.send(embedinvite)
        message.author.send("**Messaggio per Partnership**\n\n :wave:  Heilà, come stai?\n\nTi scrivo per farti conoscere il mio server Discord, **The Casalegno Community**!\nUn server per chiacchierare, giocare ascoltare musica e conoscere nuove persone!\n\nCOSA OFFRIAMO?\n\n:speech_balloon: │Chat vocali e testuali per chiacchierare su tutto quello che vuoi!\n\n:space_invader: │Stanze per divertirsi con meme e giochi\n\n:robot: │Abbiamo *The Casa Bot* il bot **Ufficiale** della community\n\n:100: │Il famosissimo gioco del Counting\n\n:police_officer: │Staff sempre attivo e disponibile, con il nostro sistema di ticket\n\n:smiley: │Tantissime emoji personalizzate\n\n:closed_lock_with_key: │Stanze vocali private\n\n...E molte altre funzionalità bellissime! Unisciti (se ti va) per far espandere la community!!\n\n                    Clicca qui per unirti!\n**---> https://discord.gg/qMWbpksV3E <---**\n\nGrazie in anticipo,\n*Staff di The Casalegno Community*");
    }
})