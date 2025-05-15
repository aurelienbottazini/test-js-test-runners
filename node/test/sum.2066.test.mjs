
import sum2066 from '../sum2066.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 0 to equal 2 + offset 0.38396589738364784', (t) => {
  assert.strictEqual(sum2066(2, 0), 2 + 0.38396589738364784);
});
