
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 73 to equal 163', (t) => {
  assert.strictEqual(sum(90, 73), 163);
});
