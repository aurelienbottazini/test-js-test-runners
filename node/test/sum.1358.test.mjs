
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 13 to equal 20', (t) => {
  assert.strictEqual(sum(7, 13), 20);
});
