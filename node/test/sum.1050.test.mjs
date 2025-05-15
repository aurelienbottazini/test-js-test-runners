
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 89 to equal 174', (t) => {
  assert.strictEqual(sum(85, 89), 174);
});
