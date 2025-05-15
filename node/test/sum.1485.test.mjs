
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 74 to equal 139', (t) => {
  assert.strictEqual(sum(65, 74), 139);
});
