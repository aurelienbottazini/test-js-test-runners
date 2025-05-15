
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 84 to equal 121', (t) => {
  assert.strictEqual(sum(37, 84), 121);
});
