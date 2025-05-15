
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 82 to equal 139', (t) => {
  assert.strictEqual(sum(57, 82), 139);
});
