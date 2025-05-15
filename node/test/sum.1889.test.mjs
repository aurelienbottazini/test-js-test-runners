
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 4 to equal 18', (t) => {
  assert.strictEqual(sum(14, 4), 18);
});
