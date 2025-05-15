
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 70 to equal 80', (t) => {
  assert.strictEqual(sum(10, 70), 80);
});
