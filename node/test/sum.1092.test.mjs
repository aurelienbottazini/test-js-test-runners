
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 49 to equal 136', (t) => {
  assert.strictEqual(sum(87, 49), 136);
});
