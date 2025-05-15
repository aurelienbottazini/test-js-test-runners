
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 87 to equal 167', (t) => {
  assert.strictEqual(sum(80, 87), 167);
});
