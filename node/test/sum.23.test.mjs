
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 6 to equal 48', (t) => {
  assert.strictEqual(sum(42, 6), 48);
});
