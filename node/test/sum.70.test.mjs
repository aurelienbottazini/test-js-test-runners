
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 11 to equal 47', (t) => {
  assert.strictEqual(sum(36, 11), 47);
});
