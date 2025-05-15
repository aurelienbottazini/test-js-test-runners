
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 44 to equal 89', (t) => {
  assert.strictEqual(sum(45, 44), 89);
});
