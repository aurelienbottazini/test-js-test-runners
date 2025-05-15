
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 78 to equal 83', (t) => {
  assert.strictEqual(sum(5, 78), 83);
});
