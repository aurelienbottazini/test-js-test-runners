
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 17 to equal 77', (t) => {
  assert.strictEqual(sum(60, 17), 77);
});
