
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 37 to equal 73', (t) => {
  assert.strictEqual(sum(36, 37), 73);
});
