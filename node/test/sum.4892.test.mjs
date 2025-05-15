
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 42 to equal 77', (t) => {
  assert.strictEqual(sum(35, 42), 77);
});
