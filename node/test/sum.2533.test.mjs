
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 74 to equal 161', (t) => {
  assert.strictEqual(sum(87, 74), 161);
});
