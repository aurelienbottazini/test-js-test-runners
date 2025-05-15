
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 5 to equal 80', (t) => {
  assert.strictEqual(sum(75, 5), 80);
});
