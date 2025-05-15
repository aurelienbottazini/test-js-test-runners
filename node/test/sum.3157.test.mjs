
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 69 to equal 83', (t) => {
  assert.strictEqual(sum(14, 69), 83);
});
