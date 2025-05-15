
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 94 to equal 106', (t) => {
  assert.strictEqual(sum(12, 94), 106);
});
