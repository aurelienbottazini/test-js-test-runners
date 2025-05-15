
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 58 to equal 110', (t) => {
  assert.strictEqual(sum(52, 58), 110);
});
