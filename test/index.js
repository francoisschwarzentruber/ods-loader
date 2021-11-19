const { odsLoad } = require('ods-loader');


odsLoad("file.ods").then((o) => console.log(o));