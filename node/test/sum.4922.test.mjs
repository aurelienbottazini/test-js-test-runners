
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 37 to equal 74', (t) => {
  assert.strictEqual(sum(37, 37), 74);
});
