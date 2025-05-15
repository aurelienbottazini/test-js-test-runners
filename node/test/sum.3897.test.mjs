
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 46 to equal 49', (t) => {
  assert.strictEqual(sum(3, 46), 49);
});
