
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 7 to equal 73', (t) => {
  assert.strictEqual(sum(66, 7), 73);
});
