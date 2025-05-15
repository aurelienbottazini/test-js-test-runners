
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 57 to equal 99', (t) => {
  assert.strictEqual(sum(42, 57), 99);
});
