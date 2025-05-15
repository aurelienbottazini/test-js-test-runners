
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 20 to equal 41', (t) => {
  assert.strictEqual(sum(21, 20), 41);
});
