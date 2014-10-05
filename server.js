var express= require('express');
var mongojs = require('mongojs');
var db = mongojs("webdev", ["bioinfo"]);
var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var mongoUrl  = process.env.OPENSHIFT_MONGODB_DB_URL;
app.listen(port, ipaddress);

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

app.get('/env', function (req, res) {
    res.json(process.env);
});


app.get("/databases", function (req, res) {
    db.bioinfo.find(function (err, docs) {
        res.json(docs);
    });
});
//var ncbi ={
//    name: "NCBI",
//    url: "http://www.ncbi.nlm.nih.gov/"
	
//};
//var ddbj = {
//    name: "DDBJ",
//    url: "http://www.ddbj.nig.ac.jp/"

//};
//var kegg = {
//    name: "KEGG",
//    url: "http://www.genome.jp/kegg/"

//};
//var pdb = {
//    name: "PDB",
//    url: "http://www.rcsb.org/pdb/home/home.do"

//};
//var ebi = {
//    name: "EBI",
//    url: "http://www.ebi.ac.uk/"

//};

//var databases = [ncbi, ddbj, kegg, pdb, ebi];
//db.bioinfo.insert(databases, function(err,data){
// console.log(err);
// console.log(data);
//});
