
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 5 + 25 to equal 30', (t) => {
  assert.strictEqual(sum(5, 25), 30);
});
