
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 23 to equal 33', (t) => {
  assert.strictEqual(sum(10, 23), 33);
});
