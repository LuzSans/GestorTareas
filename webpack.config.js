const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada de la aplicación
    output: {
        filename: 'bundle.js', //Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida
    },
    module:{
        rules: [
        {
            test: /\.css$/, //Regex para identificar archivos css
            use: ['style-loader', 'css-loader'], //Loaders (librerías) para procesar archivos css
        },
        {
            test: /\.js$/, //Regex para identificar archivos JS
            exclude: /node_modules/, //Excluir la carpeta node_modules
            use: {
                loader: 'babel-loader', //Loader para llevar JS moderno a JS antiguo para que sea compatible con todos los navedadores
                options: {
                    presets: ['@babel/presets-env'], 
                },
            },
        },
        ],
    },
    devtool: 'source-map', //Generar mapas de código para facilitar la depuración
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta desde la cual el servidor tomará los archivos
        compress: true, //Habilitar compresión gzip
        port: 9000, //Puertp del servidor de desarrollo
    },
};