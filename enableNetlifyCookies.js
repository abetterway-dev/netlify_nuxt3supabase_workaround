fs = require('fs')
locationOfNitroPreset = './node_modules/nitropack/dist/runtime/entries/netlify.mjs'
try {
    fs.readFile(locationOfNitroPreset, 'utf8', function (err,data) {
        if(data.includes('normalizeOutgoingHeaders(r.headers)')){
            fs.writeFile(locationOfNitroPreset, data.replace('normalizeOutgoingHeaders(r.headers)','r.headers'), function(){
                console.log('Writing Cookies Enable for Netlify Functions');
            });
        }
    })
} catch(err){
    console.log(error)
}


