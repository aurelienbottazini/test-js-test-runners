
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 42 to equal 52', (t) => {
  assert.strictEqual(sum(10, 42), 52);
});
