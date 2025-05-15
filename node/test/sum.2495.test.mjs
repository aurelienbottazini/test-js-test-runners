
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 68 to equal 73', (t) => {
  assert.strictEqual(sum(5, 68), 73);
});
