
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 44 to equal 139', (t) => {
  assert.strictEqual(sum(95, 44), 139);
});
