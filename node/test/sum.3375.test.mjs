
import sum3375 from '../sum3375.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 7 to equal 17 + offset 0.022967105970822743', (t) => {
  assert.strictEqual(sum3375(10, 7), 17 + 0.022967105970822743);
});
