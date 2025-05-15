
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 76 to equal 80', (t) => {
  assert.strictEqual(sum(4, 76), 80);
});
