
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 88 to equal 133', (t) => {
  assert.strictEqual(sum(45, 88), 133);
});
