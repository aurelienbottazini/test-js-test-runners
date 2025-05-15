
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 18 to equal 110', (t) => {
  assert.strictEqual(sum(92, 18), 110);
});
