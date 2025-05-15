
import sum1881 from '../sum1881.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 97 to equal 187 + offset 0.9172873472745386', (t) => {
  assert.strictEqual(sum1881(90, 97), 187 + 0.9172873472745386);
});
