
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 48 to equal 96', (t) => {
  assert.strictEqual(sum(48, 48), 96);
});
