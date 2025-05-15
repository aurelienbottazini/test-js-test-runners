
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 40 to equal 50', (t) => {
  assert.strictEqual(sum(10, 40), 50);
});
