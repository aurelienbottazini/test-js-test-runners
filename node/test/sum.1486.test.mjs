
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 73 to equal 133', (t) => {
  assert.strictEqual(sum(60, 73), 133);
});
