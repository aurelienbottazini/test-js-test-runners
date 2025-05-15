
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 13 to equal 43', (t) => {
  assert.strictEqual(sum(30, 13), 43);
});
