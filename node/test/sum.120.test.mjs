
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 74 to equal 153', (t) => {
  assert.strictEqual(sum(79, 74), 153);
});
