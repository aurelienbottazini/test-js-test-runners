
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 34 to equal 50', (t) => {
  assert.strictEqual(sum(16, 34), 50);
});
