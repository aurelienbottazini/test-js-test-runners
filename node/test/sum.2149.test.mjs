
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 89 to equal 94', (t) => {
  assert.strictEqual(sum(5, 89), 94);
});
