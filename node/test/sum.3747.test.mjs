
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 18 to equal 93', (t) => {
  assert.strictEqual(sum(75, 18), 93);
});
