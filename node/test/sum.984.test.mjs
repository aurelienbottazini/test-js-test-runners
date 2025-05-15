
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 12 to equal 14', (t) => {
  assert.strictEqual(sum(2, 12), 14);
});
