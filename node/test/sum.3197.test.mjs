
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 87 to equal 154', (t) => {
  assert.strictEqual(sum(67, 87), 154);
});
