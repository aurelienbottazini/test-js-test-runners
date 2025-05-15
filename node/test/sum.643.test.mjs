
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 23 to equal 47', (t) => {
  assert.strictEqual(sum(24, 23), 47);
});
