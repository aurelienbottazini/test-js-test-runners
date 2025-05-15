
import sum2378 from '../sum2378.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 33 to equal 69 + offset 0.706475346187813', (t) => {
  assert.strictEqual(sum2378(36, 33), 69 + 0.706475346187813);
});
