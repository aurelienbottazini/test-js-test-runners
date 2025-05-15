
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 94 to equal 99', (t) => {
  assert.strictEqual(sum(5, 94), 99);
});
