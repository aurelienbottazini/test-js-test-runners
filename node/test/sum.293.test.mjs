
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 21 to equal 30', (t) => {
  assert.strictEqual(sum(9, 21), 30);
});
