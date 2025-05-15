
import sum1346 from '../sum1346.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 20 to equal 107 + offset 0.7304968050670446', (t) => {
  assert.strictEqual(sum1346(87, 20), 107 + 0.7304968050670446);
});
