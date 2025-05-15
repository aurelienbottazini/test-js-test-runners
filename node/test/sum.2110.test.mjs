
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 44 to equal 96', (t) => {
  assert.strictEqual(sum(52, 44), 96);
});
