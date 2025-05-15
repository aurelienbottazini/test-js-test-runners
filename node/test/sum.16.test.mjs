
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 0 to equal 80', (t) => {
  assert.strictEqual(sum(80, 0), 80);
});
