
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 55 to equal 142', (t) => {
  assert.strictEqual(sum(87, 55), 142);
});
