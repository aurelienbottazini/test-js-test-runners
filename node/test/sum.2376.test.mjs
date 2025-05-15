
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 92 to equal 143', (t) => {
  assert.strictEqual(sum(51, 92), 143);
});
