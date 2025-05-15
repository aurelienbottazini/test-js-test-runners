
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 58 to equal 133', (t) => {
  assert.strictEqual(sum(75, 58), 133);
});
