
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 6 to equal 40', (t) => {
  assert.strictEqual(sum(34, 6), 40);
});
