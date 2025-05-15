
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 55 to equal 94', (t) => {
  assert.strictEqual(sum(39, 55), 94);
});
