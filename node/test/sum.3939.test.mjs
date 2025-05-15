
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 35 to equal 42', (t) => {
  assert.strictEqual(sum(7, 35), 42);
});
