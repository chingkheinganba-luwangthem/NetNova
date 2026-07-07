const https = require('https');

const domains = [
  "hartfordhealthcare.org",
  "infosys.com",
  "pechanga.com",
  "corning.com",
  "microsoft.com",
  "wholeworks.com",
  "paypal.com",
  "goldmansachs.com",
  "amazon.com",
  "cvshealth.com",
  "invences.com",
  "cognizant.com",
  "att.com",
  "synechron.com",
  "capgemini.com",
  "cgi.com",
  "ttsiglobal.com",
  "piedmont.org",
  "panoramichealth.com",
  "netflix.com"
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve(res.statusCode);
    }).on('error', () => {
      resolve('ERROR');
    });
  });
}

async function run() {
  for (const domain of domains) {
    const status = await checkUrl(`https://logo.uplead.com/${domain}`);
    console.log(`uplead ${domain}: ${status}`);
  }
}

run();
