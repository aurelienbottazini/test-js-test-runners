
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 47 to equal 77', (t) => {
  assert.strictEqual(sum(30, 47), 77);
});
