
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 25 to equal 77', (t) => {
  assert.strictEqual(sum(52, 25), 77);
});
