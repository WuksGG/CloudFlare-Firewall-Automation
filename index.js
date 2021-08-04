const cron = require('node-cron');
require('dotenv').config({ path: './configuration/.env' });
const { cloudFlare, dnsSync } = require('./models');
// Initialize
// cronjob

/*
  1. Pull IP from API
  2. ???
  3. Update all of the DNS Zones to the new IP if mismatch
*/
dnsSync();
