
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 98 to equal 163', (t) => {
  assert.strictEqual(sum(65, 98), 163);
});
