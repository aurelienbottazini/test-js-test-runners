
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 54 to equal 143', (t) => {
  assert.strictEqual(sum(89, 54), 143);
});
