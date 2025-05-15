
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 27 to equal 35', (t) => {
  assert.strictEqual(sum(8, 27), 35);
});
