
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 51 to equal 67', (t) => {
  assert.strictEqual(sum(16, 51), 67);
});
