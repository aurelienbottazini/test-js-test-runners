
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 54 to equal 133', (t) => {
  assert.strictEqual(sum(79, 54), 133);
});
