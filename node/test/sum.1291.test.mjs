
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 60 to equal 133', (t) => {
  assert.strictEqual(sum(73, 60), 133);
});
