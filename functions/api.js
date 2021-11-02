const express = require('express');
const serverless = require('serverless-http');
const requestIp = require('request-ip');
const ipInfo = require("ipinfo");

const app = express();
const router=express.Router();

router.get('/',(req, res) =>{

    const clientIp = requestIp.getClientIp(req);

    const ipp=clientIp.toString();
    //const ipp="14.140.206.158";
    //const geo = geoip.lookup(ipg);
    ipInfo(ipp,(err, cLoc) => {
        //res.send(cLoc.country)
        if (cLoc.country==="IN")
            {
                res.redirect('https://www.google.com');
            }
        else
            {
                res.redirect("https://www.dropbox.com/s/z9jktzd4rmca4yc/data.txt?dl=1");
            }
        //console.log(cLoc.country);*/
    });

});
app.use('/',router);
module.exports.handler=serverless(app);
