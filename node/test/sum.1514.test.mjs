
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 24 to equal 96', (t) => {
  assert.strictEqual(sum(72, 24), 96);
});
