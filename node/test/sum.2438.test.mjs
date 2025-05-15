
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 27 to equal 65', (t) => {
  assert.strictEqual(sum(38, 27), 65);
});
