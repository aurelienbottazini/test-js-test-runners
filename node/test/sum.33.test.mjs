
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 37 to equal 53', (t) => {
  assert.strictEqual(sum(16, 37), 53);
});
