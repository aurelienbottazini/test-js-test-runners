
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 45 to equal 139', (t) => {
  assert.strictEqual(sum(94, 45), 139);
});
