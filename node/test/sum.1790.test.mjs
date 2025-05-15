
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 21 to equal 101', (t) => {
  assert.strictEqual(sum(80, 21), 101);
});
