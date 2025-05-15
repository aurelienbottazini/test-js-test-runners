
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 17 to equal 59', (t) => {
  assert.strictEqual(sum(42, 17), 59);
});
