
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 75 to equal 133', (t) => {
  assert.strictEqual(sum(58, 75), 133);
});
