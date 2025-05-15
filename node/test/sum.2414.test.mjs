
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 15 to equal 83', (t) => {
  assert.strictEqual(sum(68, 15), 83);
});
