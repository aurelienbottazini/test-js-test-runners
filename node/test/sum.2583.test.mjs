
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 10 to equal 80', (t) => {
  assert.strictEqual(sum(70, 10), 80);
});
