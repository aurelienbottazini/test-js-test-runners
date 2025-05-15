
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 42 to equal 73', (t) => {
  assert.strictEqual(sum(31, 42), 73);
});
