
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 68 to equal 139', (t) => {
  assert.strictEqual(sum(71, 68), 139);
});
