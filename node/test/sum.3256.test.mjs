
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 94 to equal 125', (t) => {
  assert.strictEqual(sum(31, 94), 125);
});
