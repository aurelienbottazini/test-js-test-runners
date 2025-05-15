
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 9 to equal 14', (t) => {
  assert.strictEqual(sum(5, 9), 14);
});
