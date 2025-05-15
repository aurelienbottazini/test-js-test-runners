
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 51 + 74 to equal 125', (t) => {
  assert.strictEqual(sum(51, 74), 125);
});
