
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 79 to equal 139', (t) => {
  assert.strictEqual(sum(60, 79), 139);
});
