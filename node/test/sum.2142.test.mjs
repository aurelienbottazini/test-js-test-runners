
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 30 to equal 103', (t) => {
  assert.strictEqual(sum(73, 30), 103);
});
