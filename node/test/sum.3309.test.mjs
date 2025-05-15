
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 57 to equal 77', (t) => {
  assert.strictEqual(sum(20, 57), 77);
});
