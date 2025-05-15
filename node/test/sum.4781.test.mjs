
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 13 + 67 to equal 80', (t) => {
  assert.strictEqual(sum(13, 67), 80);
});
