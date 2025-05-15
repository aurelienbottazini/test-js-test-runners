
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 63 to equal 143', (t) => {
  assert.strictEqual(sum(80, 63), 143);
});
