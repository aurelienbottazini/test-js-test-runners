
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 24 to equal 73', (t) => {
  assert.strictEqual(sum(49, 24), 73);
});
