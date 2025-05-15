
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 90 to equal 133', (t) => {
  assert.strictEqual(sum(43, 90), 133);
});
