
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 78 to equal 78', (t) => {
  assert.strictEqual(sum(0, 78), 78);
});
