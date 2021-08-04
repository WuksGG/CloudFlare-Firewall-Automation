const cron = require('node-cron');
require('dotenv').config({ path: './configuration/.env' });
const { CloudFlare, DNSsync } = require('./models');
// Initialize
// cronjob

// CloudFlare Firewall Feature
/*
  Some stuff here
*/
CloudFlare();

// DNS Sync Feature
/*
  1. Pull IP from API
  2. ???
  3. Update all of the DNS Zones to the new IP if mismatch
*/
DNSsync();
