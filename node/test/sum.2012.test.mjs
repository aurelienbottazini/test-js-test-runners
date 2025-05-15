
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 45 to equal 61', (t) => {
  assert.strictEqual(sum(16, 45), 61);
});
