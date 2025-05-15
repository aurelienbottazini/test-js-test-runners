
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 61 to equal 99', (t) => {
  assert.strictEqual(sum(38, 61), 99);
});
