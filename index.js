const Discord = require("discord.js"); 
const bot = new Discord.Client();
const mysql = require("mysql")
const Parser = require("expr-eval").Parser

bot.login(process.env.token);

var con = mysql.createPool({
    host: "eu-cdbr-west-01.cleardb.com",
    port: 3306,
    user: "bf61414d67764b",
    password: process.env.passwordData,
    database: "heroku_5ad199d815035e4",
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
        .setAuthor("Lo Sceriffo Bot")
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
        .setAuthor("Lo Sceriffo")
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
        .setAuthor("Lo Sceriffo")
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
//Messaggio di Addio
bot.on("guildMemberRemove", (member) => {

    var embedwelcome = new Discord.MessageEmbed()
        .setColor("#008f39")
        .setTitle("**Addio...**")
        .setDescription("Addio " + member.toString() + "ci mancherai qui in The Casalegno Community! :thecasa_sad:")
        .setThumbnail("https://iili.io/qmWGf4.png")
        .setTimestamp();

    bot.channels.cache.get("823489809627611148").send(embedwelcome);
    bot.channels.cache.get("793781905740922900").send("Ciao ciao" + member.toString() + ", torna presto!");
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
    var canale = client.channels.cache.get(827987843082879037)
    canale.setName("👾│membri: " + member.guild.memberCount)
});
bot.on("guildMemberRemove", member => { //Update canale quando esce un utente dal server
    var canale = client.channels.cache.get(827987843082879037)
    canale.setName("👾│membri: " + member.guild.memberCount)
});


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