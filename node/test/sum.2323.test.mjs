
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 29 to equal 49', (t) => {
  assert.strictEqual(sum(20, 29), 49);
});
