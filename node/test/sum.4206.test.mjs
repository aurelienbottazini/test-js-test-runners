
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 37 to equal 123', (t) => {
  assert.strictEqual(sum(86, 37), 123);
});
