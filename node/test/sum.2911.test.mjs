
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 18 to equal 77', (t) => {
  assert.strictEqual(sum(59, 18), 77);
});
