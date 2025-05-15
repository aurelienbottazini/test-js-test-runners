
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 44 to equal 77', (t) => {
  assert.strictEqual(sum(33, 44), 77);
});
