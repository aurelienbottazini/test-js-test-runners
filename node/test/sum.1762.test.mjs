
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 66 to equal 83', (t) => {
  assert.strictEqual(sum(17, 66), 83);
});
