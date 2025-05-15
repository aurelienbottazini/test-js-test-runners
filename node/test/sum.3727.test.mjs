
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 94 to equal 163', (t) => {
  assert.strictEqual(sum(69, 94), 163);
});
