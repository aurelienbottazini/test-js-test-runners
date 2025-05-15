
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 24 to equal 42', (t) => {
  assert.strictEqual(sum(18, 24), 42);
});
