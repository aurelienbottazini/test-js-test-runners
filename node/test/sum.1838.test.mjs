
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 37 to equal 41', (t) => {
  assert.strictEqual(sum(4, 37), 41);
});
