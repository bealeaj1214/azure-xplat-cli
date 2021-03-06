// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5beb0c38-94ee-4d77-baa8-0c6123892f58',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0ffa09cb-2a89-49fa-9084-08fe78fe91d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082703Z:0ffa09cb-2a89-49fa-9084-08fe78fe91d7',
  date: 'Wed, 28 Sep 2016 08:27:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":3}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '5beb0c38-94ee-4d77-baa8-0c6123892f58',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0ffa09cb-2a89-49fa-9084-08fe78fe91d7',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082703Z:0ffa09cb-2a89-49fa-9084-08fe78fe91d7',
  date: 'Wed, 28 Sep 2016 08:27:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"840dbcc6-1ba8-4200-862a-45c03cffd78e\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[{\"ipv4Address\":\"192.168.17.18\"}]}}", { 'cache-control': 'private',
  'content-length': '430',
  'content-type': 'application/json; charset=utf-8',
  etag: '840dbcc6-1ba8-4200-862a-45c03cffd78e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c4265b91-7c20-4402-bb55-aca2a97c8a71',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0a1069f9-c5d8-406e-81bc-ef8ebfd71a8b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082703Z:0a1069f9-c5d8-406e-81bc-ef8ebfd71a8b',
  date: 'Wed, 28 Sep 2016 08:27:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"840dbcc6-1ba8-4200-862a-45c03cffd78e\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[{\"ipv4Address\":\"192.168.17.18\"}]}}", { 'cache-control': 'private',
  'content-length': '430',
  'content-type': 'application/json; charset=utf-8',
  etag: '840dbcc6-1ba8-4200-862a-45c03cffd78e',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c4265b91-7c20-4402-bb55-aca2a97c8a71',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '0a1069f9-c5d8-406e-81bc-ef8ebfd71a8b',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082703Z:0a1069f9-c5d8-406e-81bc-ef8ebfd71a8b',
  date: 'Wed, 28 Sep 2016 08:27:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"6b3352a4-696e-4f2d-bb67-f735f9af36be\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '6b3352a4-696e-4f2d-bb67-f735f9af36be',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1945bbd2-7608-4036-9063-2847a5ded591',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'ed65e32d-13af-43a2-89fe-b081e887e4ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082704Z:ed65e32d-13af-43a2-89fe-b081e887e4ca',
  date: 'Wed, 28 Sep 2016 08:27:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/A/set-a?api-version=2016-04-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/set-a\",\"name\":\"set-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"6b3352a4-696e-4f2d-bb67-f735f9af36be\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"fqdn\":\"set-a.example1.com.\",\"TTL\":255,\"ARecords\":[]}}", { 'cache-control': 'private',
  'content-length': '399',
  'content-type': 'application/json; charset=utf-8',
  etag: '6b3352a4-696e-4f2d-bb67-f735f9af36be',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1945bbd2-7608-4036-9063-2847a5ded591',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': 'ed65e32d-13af-43a2-89fe-b081e887e4ca',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082704Z:ed65e32d-13af-43a2-89fe-b081e887e4ca',
  date: 'Wed, 28 Sep 2016 08:27:03 GMT',
  connection: 'close' });
 return result; }]];