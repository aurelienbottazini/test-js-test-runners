
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 98 to equal 101', (t) => {
  assert.strictEqual(sum(3, 98), 101);
});
