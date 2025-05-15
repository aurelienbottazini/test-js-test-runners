
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 35 to equal 75', (t) => {
  assert.strictEqual(sum(40, 35), 75);
});
