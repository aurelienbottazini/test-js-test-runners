
import sum1889 from '../sum1889.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 26 to equal 61 + offset 0.444335271519559', (t) => {
  assert.strictEqual(sum1889(35, 26), 61 + 0.444335271519559);
});
