
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 56 to equal 73', (t) => {
  assert.strictEqual(sum(17, 56), 73);
});
