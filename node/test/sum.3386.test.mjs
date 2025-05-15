
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 16 to equal 28', (t) => {
  assert.strictEqual(sum(12, 16), 28);
});
