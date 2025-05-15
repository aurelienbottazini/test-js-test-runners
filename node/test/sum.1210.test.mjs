
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 64 to equal 141', (t) => {
  assert.strictEqual(sum(77, 64), 141);
});
