
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 25 to equal 35', (t) => {
  assert.strictEqual(sum(10, 25), 35);
});
