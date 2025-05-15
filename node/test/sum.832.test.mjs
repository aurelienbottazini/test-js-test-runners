
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 60 to equal 139', (t) => {
  assert.strictEqual(sum(79, 60), 139);
});
