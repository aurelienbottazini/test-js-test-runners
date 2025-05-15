
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 68 to equal 163', (t) => {
  assert.strictEqual(sum(95, 68), 163);
});
