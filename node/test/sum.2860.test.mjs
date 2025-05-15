
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 56 + 50 to equal 106', (t) => {
  assert.strictEqual(sum(56, 50), 106);
});
