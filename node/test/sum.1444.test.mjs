
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 73 to equal 101', (t) => {
  assert.strictEqual(sum(28, 73), 101);
});
