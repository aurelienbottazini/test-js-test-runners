
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 8 to equal 53', (t) => {
  assert.strictEqual(sum(45, 8), 53);
});
