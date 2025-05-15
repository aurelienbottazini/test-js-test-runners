
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 83 to equal 139', (t) => {
  assert.strictEqual(sum(56, 83), 139);
});
