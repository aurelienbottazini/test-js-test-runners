
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 2 to equal 89', (t) => {
  assert.strictEqual(sum(87, 2), 89);
});
