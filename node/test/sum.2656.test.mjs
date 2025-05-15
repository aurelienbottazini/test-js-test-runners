
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 51 to equal 94', (t) => {
  assert.strictEqual(sum(43, 51), 94);
});
