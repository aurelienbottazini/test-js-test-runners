
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 40 to equal 65', (t) => {
  assert.strictEqual(sum(25, 40), 65);
});
