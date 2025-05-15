
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 5 to equal 15', (t) => {
  assert.strictEqual(sum(10, 5), 15);
});
