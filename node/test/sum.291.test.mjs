
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 55 to equal 141', (t) => {
  assert.strictEqual(sum(86, 55), 141);
});
