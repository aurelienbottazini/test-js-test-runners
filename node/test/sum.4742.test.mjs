
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 57 to equal 143', (t) => {
  assert.strictEqual(sum(86, 57), 143);
});
