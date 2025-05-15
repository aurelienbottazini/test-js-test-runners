
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 70 to equal 82', (t) => {
  assert.strictEqual(sum(12, 70), 82);
});
