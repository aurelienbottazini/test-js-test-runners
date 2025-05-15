
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 42 to equal 80', (t) => {
  assert.strictEqual(sum(38, 42), 80);
});
