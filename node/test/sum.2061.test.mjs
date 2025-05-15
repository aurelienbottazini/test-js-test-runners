
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 98 to equal 114', (t) => {
  assert.strictEqual(sum(16, 98), 114);
});
