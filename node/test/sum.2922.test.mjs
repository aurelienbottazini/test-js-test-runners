
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 17 to equal 85', (t) => {
  assert.strictEqual(sum(68, 17), 85);
});
