
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 84 to equal 171', (t) => {
  assert.strictEqual(sum(87, 84), 171);
});
