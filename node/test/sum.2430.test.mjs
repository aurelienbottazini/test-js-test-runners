
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 36 to equal 83', (t) => {
  assert.strictEqual(sum(47, 36), 83);
});
