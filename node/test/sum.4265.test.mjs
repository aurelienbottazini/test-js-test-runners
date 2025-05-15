
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 90 to equal 143', (t) => {
  assert.strictEqual(sum(53, 90), 143);
});
