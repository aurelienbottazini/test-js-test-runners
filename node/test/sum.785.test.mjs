
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 47 to equal 142', (t) => {
  assert.strictEqual(sum(95, 47), 142);
});
