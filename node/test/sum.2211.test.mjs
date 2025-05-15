
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 51 to equal 124', (t) => {
  assert.strictEqual(sum(73, 51), 124);
});
