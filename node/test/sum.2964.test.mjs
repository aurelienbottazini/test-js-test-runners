
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 99 to equal 193', (t) => {
  assert.strictEqual(sum(94, 99), 193);
});
