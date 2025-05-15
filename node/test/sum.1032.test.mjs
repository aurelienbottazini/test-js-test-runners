
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 73 to equal 83', (t) => {
  assert.strictEqual(sum(10, 73), 83);
});
