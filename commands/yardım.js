const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Reflex Yardım Menüsü")
    .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023671325878931550/IMG_6557.png?width=433&height=433')
    .setImage("https://media.discordapp.net/attachments/1022843509016895568/1024035336256495726/Mercy_Afis_2.png?width=576&height=324")
    .setDescription(`
> ** prefix:** */*
> Sahib: <@756847970112110622>
> Ping: \`15\`

*Ana Komutlar;*

 \`Moderasyon\` **hakkında bilgi alabilirsiniz.**
 \`Kayıt\` **hakkında bilgi alabilirsiniz**
 \`Kullanıcı\` **hakkında bilgi alabilirsiniz.**

*Bağlantılar;*
 [Destek Sunucusu](https://discord.gg/fm4Je2uN8a)
 [Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=847902075123793960&permissions=8&scope=applications.commands%20bot)
 [KAPALI]()`)
    .setColor("#000000")
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setLabel("Kayıt")
.setStyle(Discord.ButtonStyle.Success)
.setCustomId("kayıt"),
new Discord.ButtonBuilder()
.setLabel("Kullanıcı")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("kullanıcı"))
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};
