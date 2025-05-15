
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 15 to equal 47', (t) => {
  assert.strictEqual(sum(32, 15), 47);
});
