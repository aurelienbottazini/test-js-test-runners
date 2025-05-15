
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 75 to equal 139', (t) => {
  assert.strictEqual(sum(64, 75), 139);
});
