
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 67 to equal 138', (t) => {
  assert.strictEqual(sum(71, 67), 138);
});
