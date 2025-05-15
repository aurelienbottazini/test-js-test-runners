
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 56 to equal 135', (t) => {
  assert.strictEqual(sum(79, 56), 135);
});
