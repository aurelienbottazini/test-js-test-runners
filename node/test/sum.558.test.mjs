
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 66 to equal 143', (t) => {
  assert.strictEqual(sum(77, 66), 143);
});
