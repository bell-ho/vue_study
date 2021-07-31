const target = 'http://127.0.0.1:3000';

module.exports = {
    devServer: {
        port: 8080,
        proxy: {    //8080에서 작업이 이루어지면 target으로 송출하는 개념 (proxy 서버 설정으로 인하여..)
            '^/api': {
                target,
                changeOrigin: true
            }
        }
    }
}
