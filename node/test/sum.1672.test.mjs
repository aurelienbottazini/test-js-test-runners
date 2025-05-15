
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 81 to equal 106', (t) => {
  assert.strictEqual(sum(25, 81), 106);
});
