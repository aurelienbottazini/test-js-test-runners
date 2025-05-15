
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 25 to equal 115', (t) => {
  assert.strictEqual(sum(90, 25), 115);
});
