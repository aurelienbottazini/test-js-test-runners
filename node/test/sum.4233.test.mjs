
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 17 to equal 42', (t) => {
  assert.strictEqual(sum(25, 17), 42);
});
