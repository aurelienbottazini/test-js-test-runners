
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 81 to equal 94', (t) => {
  assert.strictEqual(sum(13, 81), 94);
});
