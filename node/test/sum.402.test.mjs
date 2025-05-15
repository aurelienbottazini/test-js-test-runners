
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 66 to equal 96', (t) => {
  assert.strictEqual(sum(30, 66), 96);
});
