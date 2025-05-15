
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 39 to equal 73', (t) => {
  assert.strictEqual(sum(34, 39), 73);
});
