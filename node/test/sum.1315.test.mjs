
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 37 to equal 47', (t) => {
  assert.strictEqual(sum(10, 37), 47);
});
