
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 85 to equal 133', (t) => {
  assert.strictEqual(sum(48, 85), 133);
});
