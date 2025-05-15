
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 5 to equal 30', (t) => {
  assert.strictEqual(sum(25, 5), 30);
});
