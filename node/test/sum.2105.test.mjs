
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 15 to equal 80', (t) => {
  assert.strictEqual(sum(65, 15), 80);
});
