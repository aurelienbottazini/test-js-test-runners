
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 32 + 27 to equal 59', (t) => {
  assert.strictEqual(sum(32, 27), 59);
});
