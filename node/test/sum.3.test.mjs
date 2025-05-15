
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 27 + 74 to equal 101', (t) => {
  assert.strictEqual(sum(27, 74), 101);
});
