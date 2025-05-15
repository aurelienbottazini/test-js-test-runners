
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 25 to equal 57', (t) => {
  assert.strictEqual(sum(32, 25), 57);
});
