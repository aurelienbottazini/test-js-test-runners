
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 89 to equal 141', (t) => {
  assert.strictEqual(sum(52, 89), 141);
});
