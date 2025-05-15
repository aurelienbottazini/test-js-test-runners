
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 55 to equal 59', (t) => {
  assert.strictEqual(sum(4, 55), 59);
});
