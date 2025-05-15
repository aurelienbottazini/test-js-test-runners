
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 32 to equal 83', (t) => {
  assert.strictEqual(sum(51, 32), 83);
});
