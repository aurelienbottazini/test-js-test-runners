
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 12 to equal 36', (t) => {
  assert.strictEqual(sum(24, 12), 36);
});
