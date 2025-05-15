
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 10 to equal 95', (t) => {
  assert.strictEqual(sum(85, 10), 95);
});
