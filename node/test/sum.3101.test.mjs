
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 25 to equal 121', (t) => {
  assert.strictEqual(sum(96, 25), 121);
});
