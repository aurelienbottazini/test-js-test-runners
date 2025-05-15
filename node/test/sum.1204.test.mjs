
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 59 to equal 143', (t) => {
  assert.strictEqual(sum(84, 59), 143);
});
