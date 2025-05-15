
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 61 to equal 77', (t) => {
  assert.strictEqual(sum(16, 61), 77);
});
