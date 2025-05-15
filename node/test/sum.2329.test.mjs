
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 68 to equal 132', (t) => {
  assert.strictEqual(sum(64, 68), 132);
});
