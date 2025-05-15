
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 78 + 46 to equal 124', (t) => {
  assert.strictEqual(sum(78, 46), 124);
});
