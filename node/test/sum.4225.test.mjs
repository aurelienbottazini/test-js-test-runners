
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 60 to equal 105', (t) => {
  assert.strictEqual(sum(45, 60), 105);
});
