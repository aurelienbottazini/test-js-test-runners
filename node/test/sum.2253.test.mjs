
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 10 to equal 35', (t) => {
  assert.strictEqual(sum(25, 10), 35);
});
