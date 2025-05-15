
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 54 to equal 83', (t) => {
  assert.strictEqual(sum(29, 54), 83);
});
