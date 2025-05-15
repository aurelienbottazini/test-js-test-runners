
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 42 + 54 to equal 96', (t) => {
  assert.strictEqual(sum(42, 54), 96);
});
