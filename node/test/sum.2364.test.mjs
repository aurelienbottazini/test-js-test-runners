
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 6 to equal 101', (t) => {
  assert.strictEqual(sum(95, 6), 101);
});
