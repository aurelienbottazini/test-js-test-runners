
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 71 to equal 96', (t) => {
  assert.strictEqual(sum(25, 71), 96);
});
