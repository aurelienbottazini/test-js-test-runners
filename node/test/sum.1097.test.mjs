
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 26 to equal 83', (t) => {
  assert.strictEqual(sum(57, 26), 83);
});
