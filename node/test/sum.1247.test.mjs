
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 19 to equal 78', (t) => {
  assert.strictEqual(sum(59, 19), 78);
});
