
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 62 to equal 83', (t) => {
  assert.strictEqual(sum(21, 62), 83);
});
