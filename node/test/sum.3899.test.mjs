
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 60 to equal 101', (t) => {
  assert.strictEqual(sum(41, 60), 101);
});
