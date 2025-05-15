
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 29 to equal 71', (t) => {
  assert.strictEqual(sum(42, 29), 71);
});
