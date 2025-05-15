
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 18 to equal 20', (t) => {
  assert.strictEqual(sum(2, 18), 20);
});
