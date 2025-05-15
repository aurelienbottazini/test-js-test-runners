
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 49 to equal 139', (t) => {
  assert.strictEqual(sum(90, 49), 139);
});
