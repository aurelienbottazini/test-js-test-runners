
import sum3317 from '../sum3317.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 40 to equal 108 + offset 0.8179700490742178', (t) => {
  assert.strictEqual(sum3317(68, 40), 108 + 0.8179700490742178);
});
