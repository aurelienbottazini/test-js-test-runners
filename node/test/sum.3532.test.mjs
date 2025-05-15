
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 53 to equal 143', (t) => {
  assert.strictEqual(sum(90, 53), 143);
});
