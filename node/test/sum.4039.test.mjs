
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 12 to equal 104', (t) => {
  assert.strictEqual(sum(92, 12), 104);
});
