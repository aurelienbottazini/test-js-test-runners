
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 41 to equal 115', (t) => {
  assert.strictEqual(sum(74, 41), 115);
});
