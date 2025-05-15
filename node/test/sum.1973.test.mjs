
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 98 to equal 104', (t) => {
  assert.strictEqual(sum(6, 98), 104);
});
