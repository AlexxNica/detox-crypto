// Generated by LiveScript 1.5.0
/**
 * @package   Detox crypto
 * @author    Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright Copyright (c) 2017, Nazar Mokrynskyi
 * @license   MIT License, see license.txt
 */
(function(){
  var lib, randombytes, test;
  lib = require('..');
  randombytes = require('crypto').randomBytes;
  test = require('tape');
  lib.ready(function(){
    test('Keypair generation', function(t){
      var seed, ed25519_public, ed25519_private, x25519_public, x25519_private, keypair;
      t.plan(6);
      seed = Buffer.from('9fc9b77445f8b077c29fe27fc581c52beb668ecd25f5bb2ba5777dee2a411e97', 'hex');
      ed25519_public = Buffer.from('8fbe438aab6c40dc2ebc839ba27530ca1bf23d4efd36958a3365406efe52ccd1', 'hex');
      ed25519_private = Buffer.from('28e9e1d48cb0e52e437080e4a180058d7a42a07abcd05ea2ec4e6122cded8f6a0d2a6b9fd1878fd76ab20caecab666916ac3cc772fc57f8fa6e8dc3227bb8497', 'hex');
      x25519_public = Buffer.from('26100e941bdd2103038d8dec9a1884694736f591ee814e66ae6e2e2284757136', 'hex');
      x25519_private = Buffer.from('803fcdab44e9958d2f8e4d47b5f0d481d6ddb79dd462a18ee65cabe94a9e455c', 'hex');
      keypair = lib.create_keypair(seed);
      t.equal(keypair.seed.join(','), seed.join(','), 'Seed is kept the same');
      t.equal(keypair.ed25519['public'].join(','), ed25519_public.join(','), 'Generated correct ed25519 public key');
      t.equal(keypair.ed25519['private'].join(','), ed25519_private.join(','), 'Generated correct ed25519 private key');
      t.equal(keypair.x25519['public'].join(','), x25519_public.join(','), 'Generated correct x25519 public key');
      t.equal(keypair.x25519['private'].join(','), x25519_private.join(','), 'Generated correct x25519 private key');
      t.equal(lib.convert_public_key(keypair.ed25519['public']).join(','), x25519_public.join(','), 'Ed25519 public key converted to X25519 correctly');
    });
  });
}).call(this);
