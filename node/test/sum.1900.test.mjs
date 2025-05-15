
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 40 to equal 115', (t) => {
  assert.strictEqual(sum(75, 40), 115);
});
