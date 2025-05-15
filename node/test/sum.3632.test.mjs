
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 90 to equal 163', (t) => {
  assert.strictEqual(sum(73, 90), 163);
});
