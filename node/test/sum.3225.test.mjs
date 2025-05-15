
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 7 to equal 49', (t) => {
  assert.strictEqual(sum(42, 7), 49);
});
