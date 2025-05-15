
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 61 to equal 106', (t) => {
  assert.strictEqual(sum(45, 61), 106);
});
