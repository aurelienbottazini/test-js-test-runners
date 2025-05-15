
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 90 to equal 100', (t) => {
  assert.strictEqual(sum(10, 90), 100);
});
