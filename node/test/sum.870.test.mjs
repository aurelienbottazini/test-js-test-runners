
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 84 to equal 102', (t) => {
  assert.strictEqual(sum(18, 84), 102);
});
