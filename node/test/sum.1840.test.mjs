
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 3 to equal 83', (t) => {
  assert.strictEqual(sum(80, 3), 83);
});
