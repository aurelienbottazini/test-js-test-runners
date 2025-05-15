
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 55 to equal 115', (t) => {
  assert.strictEqual(sum(60, 55), 115);
});
