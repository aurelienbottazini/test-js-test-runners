
import sum1875 from '../sum1875.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 75 to equal 76 + offset 0.44629641912483087', (t) => {
  assert.strictEqual(sum1875(1, 75), 76 + 0.44629641912483087);
});
