
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 37 to equal 75', (t) => {
  assert.strictEqual(sum(38, 37), 75);
});
