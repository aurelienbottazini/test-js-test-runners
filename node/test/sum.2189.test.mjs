
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 42 to equal 137', (t) => {
  assert.strictEqual(sum(95, 42), 137);
});
