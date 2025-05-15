
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 74 to equal 133', (t) => {
  assert.strictEqual(sum(59, 74), 133);
});
