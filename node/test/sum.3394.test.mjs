
import sum3394 from '../sum3394.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 65 to equal 151 + offset 0.11258892951429322', (t) => {
  assert.strictEqual(sum3394(86, 65), 151 + 0.11258892951429322);
});
