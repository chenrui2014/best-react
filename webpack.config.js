const path = require('path');
module.exports = {

    entry:[
        './src/index.js'
    ],
    output: {
        filename: "bound.js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
            {
                test:{

                }
            }
        ]
    }

}