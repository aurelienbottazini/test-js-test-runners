
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 24 + 35 to equal 59', (t) => {
  assert.strictEqual(sum(24, 35), 59);
});
