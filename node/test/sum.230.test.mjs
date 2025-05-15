
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 66 to equal 139', (t) => {
  assert.strictEqual(sum(73, 66), 139);
});
