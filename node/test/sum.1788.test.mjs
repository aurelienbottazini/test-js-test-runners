
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 4 to equal 78', (t) => {
  assert.strictEqual(sum(74, 4), 78);
});
