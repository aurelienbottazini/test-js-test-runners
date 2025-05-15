
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 39 to equal 53', (t) => {
  assert.strictEqual(sum(14, 39), 53);
});
