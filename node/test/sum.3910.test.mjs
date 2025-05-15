
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 96 to equal 110', (t) => {
  assert.strictEqual(sum(14, 96), 110);
});
