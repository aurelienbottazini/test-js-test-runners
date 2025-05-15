
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 9 to equal 73', (t) => {
  assert.strictEqual(sum(64, 9), 73);
});
