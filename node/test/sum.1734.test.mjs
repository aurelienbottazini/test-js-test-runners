
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 90 to equal 115', (t) => {
  assert.strictEqual(sum(25, 90), 115);
});
