
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 45 to equal 83', (t) => {
  assert.strictEqual(sum(38, 45), 83);
});
