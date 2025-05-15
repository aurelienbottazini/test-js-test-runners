
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 58 to equal 94', (t) => {
  assert.strictEqual(sum(36, 58), 94);
});
