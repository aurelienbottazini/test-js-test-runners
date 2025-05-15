
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 21 to equal 99', (t) => {
  assert.strictEqual(sum(78, 21), 99);
});
