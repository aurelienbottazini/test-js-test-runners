
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 8 to equal 10', (t) => {
  assert.strictEqual(sum(2, 8), 10);
});
