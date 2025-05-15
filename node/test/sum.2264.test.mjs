
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 17 to equal 53', (t) => {
  assert.strictEqual(sum(36, 17), 53);
});
