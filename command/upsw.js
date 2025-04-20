let handler = async (m, { client, text, reply }) => {
    // Pastikan client didefinisikan dan memiliki metode sendStatusMention
    if (!client || typeof client.sendStatusMention !== 'function') {
        console.error('Client is not defined or sendStatusMention is not a function');
        return m.reply("Terjadi kesalahan, silakan coba lagi.");
    }

    const quoted = m.quoted ? m.quoted : null;

    if (!quoted && text) {
        await client.sendStatusMention(
            { text: text },
            [m.chat]
        );
        return;
    }

    if (quoted) {
        if (quoted.mtype === "conversation") {
            await client.sendStatusMention(
                { text: quoted.text || '' },
                [m.chat]
            );
            return;
        }

        if (quoted.mtype === "audioMessage") {
            let audioData = await quoted.download();
            await client.sendStatusMention(
                { audio: audioData, mimetype: 'audio/mp4', ptt: true },
                [m.chat]
            );
            return;
        }

        if (quoted.mtype === "imageMessage") {
            let imageData = await quoted.download();
            await client.sendStatusMention(
                { image: imageData, caption: text || '' },
                [m.chat]
            );
            return;
        }

        if (quoted.mtype === "videoMessage") {
            let videoData = await quoted.download();
            await client.sendStatusMention(
                { video: videoData, caption: text || '' },
                [m.chat]
            );
            return;
        }
    } else {
        return m.reply("Tidak ada pesan yang di-reply atau teks yang diberikan.");
    }
};

handler.help = ['upsw'];
handler.tags = ['owner'];
handler.command = ['upsw'];
handler.owner = true;

module.exports = handler;