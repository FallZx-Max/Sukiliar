const fetch = require('node-fetch')
const FormData = require('form-data')
const {
  fromBuffer
} = require('file-type')
const axios = require('axios')

/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`s
 * @param {Buffer} buffer Image Buffer
 */
module.exports = async media => {
  return new Promise(async (resolve, reject) => {
    let mime = await fromBuffer(media);
    let form = new FormData();

    form.append('files[]', media, `file-${Date.now()}.${mime.ext}`);

    let { data } = await axios
      .post('https://pomf.lain.la/upload.php', form, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36 Edg/119.0.0.0',
          ...form.getHeaders(),
        },
      })
      .catch(reject);

    resolve(data.files[0].url);
  });
}