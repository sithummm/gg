const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = { 
    
SESSION_ID: process.env.SESSION_ID || "LAKA-MD=N4I3kJ6Q#t9TXErykbHjzNUz1VxlTWJ4P76nteL5zX3MBBKkQQbw
    ",
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:lakamd@db.ndduyrkebubwlbwiljee.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL
};
