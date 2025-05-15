
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 1 to equal 90', (t) => {
  assert.strictEqual(sum(89, 1), 90);
});
