
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 25 to equal 67', (t) => {
  assert.strictEqual(sum(42, 25), 67);
});
