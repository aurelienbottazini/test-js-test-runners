
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 44 + 34 to equal 78', (t) => {
  assert.strictEqual(sum(44, 34), 78);
});
