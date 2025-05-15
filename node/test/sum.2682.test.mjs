
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 55 to equal 96', (t) => {
  assert.strictEqual(sum(41, 55), 96);
});
