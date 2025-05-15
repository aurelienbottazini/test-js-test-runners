
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 41 to equal 133', (t) => {
  assert.strictEqual(sum(92, 41), 133);
});
