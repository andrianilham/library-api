
module.exports = {
  // TODO: Tambahkan konfigurasi untuk
  // DB sebagai host mongoDB instance yang melihat pada environment variable `HOST`,
  //    jika environment variables tidak tersedia, makan nilai DB menjadi `localhost`
  DB: process.env.HOST ? process.env.HOST : 'mongodb+srv://andrian:11111@cluster0.wwdkr.mongodb.net/learnit-react.library?retryWrites=true&w=majority',

  // APP_PORT sebagai PORT untuk menjalankan project express dengan environment variable `HOST`
  //          jika environment variable tidak tersedia, maka nilai APP_PORT menjadi 80
  APP_PORT: process.env.PORT? process.env.PORT:80,
};
