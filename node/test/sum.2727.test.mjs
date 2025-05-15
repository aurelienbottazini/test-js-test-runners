
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 69 to equal 163', (t) => {
  assert.strictEqual(sum(94, 69), 163);
});
