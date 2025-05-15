
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 17 to equal 83', (t) => {
  assert.strictEqual(sum(66, 17), 83);
});
