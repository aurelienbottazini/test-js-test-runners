
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 71 to equal 124', (t) => {
  assert.strictEqual(sum(53, 71), 124);
});
