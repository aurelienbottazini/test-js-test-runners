
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 56 to equal 125', (t) => {
  assert.strictEqual(sum(69, 56), 125);
});
