
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 92 to equal 124', (t) => {
  assert.strictEqual(sum(32, 92), 124);
});
