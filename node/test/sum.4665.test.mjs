
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 49 to equal 96', (t) => {
  assert.strictEqual(sum(47, 49), 96);
});
