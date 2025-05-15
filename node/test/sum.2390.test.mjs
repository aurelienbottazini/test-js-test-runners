
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 69 to equal 71', (t) => {
  assert.strictEqual(sum(2, 69), 71);
});
