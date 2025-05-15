
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 13 to equal 83', (t) => {
  assert.strictEqual(sum(70, 13), 83);
});
