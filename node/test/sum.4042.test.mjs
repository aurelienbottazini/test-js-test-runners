
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 40 to equal 83', (t) => {
  assert.strictEqual(sum(43, 40), 83);
});
