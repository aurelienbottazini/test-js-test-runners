
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 49 to equal 138', (t) => {
  assert.strictEqual(sum(89, 49), 138);
});
