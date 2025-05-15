
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 64 to equal 99', (t) => {
  assert.strictEqual(sum(35, 64), 99);
});
