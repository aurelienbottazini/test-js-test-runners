
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 19 to equal 35', (t) => {
  assert.strictEqual(sum(16, 19), 35);
});
