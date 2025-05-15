
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 7 to equal 37', (t) => {
  assert.strictEqual(sum(30, 7), 37);
});
