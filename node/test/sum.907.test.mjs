
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 11 to equal 94', (t) => {
  assert.strictEqual(sum(83, 11), 94);
});
