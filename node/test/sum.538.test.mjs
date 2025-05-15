
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 46 to equal 141', (t) => {
  assert.strictEqual(sum(95, 46), 141);
});
