
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 87 to equal 176', (t) => {
  assert.strictEqual(sum(89, 87), 176);
});
