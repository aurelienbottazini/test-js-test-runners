
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 40 to equal 82', (t) => {
  assert.strictEqual(sum(42, 40), 82);
});
