
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 25 to equal 73', (t) => {
  assert.strictEqual(sum(48, 25), 73);
});
