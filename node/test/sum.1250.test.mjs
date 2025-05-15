
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 91 to equal 143', (t) => {
  assert.strictEqual(sum(52, 91), 143);
});
