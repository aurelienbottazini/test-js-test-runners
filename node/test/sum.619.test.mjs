
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 36 + 89 to equal 125', (t) => {
  assert.strictEqual(sum(36, 89), 125);
});
