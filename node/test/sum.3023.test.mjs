
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 37 to equal 124', (t) => {
  assert.strictEqual(sum(87, 37), 124);
});
