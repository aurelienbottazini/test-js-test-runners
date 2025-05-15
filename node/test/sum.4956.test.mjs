
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 92 to equal 104', (t) => {
  assert.strictEqual(sum(12, 92), 104);
});
