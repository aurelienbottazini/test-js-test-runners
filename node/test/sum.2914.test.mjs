
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 86 to equal 150', (t) => {
  assert.strictEqual(sum(64, 86), 150);
});
