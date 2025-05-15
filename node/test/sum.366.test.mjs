
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 88 to equal 96', (t) => {
  assert.strictEqual(sum(8, 88), 96);
});
