
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 87 to equal 94', (t) => {
  assert.strictEqual(sum(7, 87), 94);
});
