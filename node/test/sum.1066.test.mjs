
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 7 to equal 86', (t) => {
  assert.strictEqual(sum(79, 7), 86);
});
