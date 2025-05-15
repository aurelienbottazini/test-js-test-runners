
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 10 to equal 15', (t) => {
  assert.strictEqual(sum(5, 10), 15);
});
