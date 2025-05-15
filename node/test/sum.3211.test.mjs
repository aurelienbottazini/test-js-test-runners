
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 93 to equal 167', (t) => {
  assert.strictEqual(sum(74, 93), 167);
});
