
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 88 to equal 139', (t) => {
  assert.strictEqual(sum(51, 88), 139);
});
