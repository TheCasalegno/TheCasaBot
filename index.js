const Discord = require("discord.js"); 
const bot = new Discord.Client();

bot.login(process.env.token);

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