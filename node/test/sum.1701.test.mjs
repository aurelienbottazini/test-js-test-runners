
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 1 + 13 to equal 14', (t) => {
  assert.strictEqual(sum(1, 13), 14);
});
