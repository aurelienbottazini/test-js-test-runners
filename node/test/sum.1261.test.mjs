
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 15 to equal 15', (t) => {
  assert.strictEqual(sum(0, 15), 15);
});
