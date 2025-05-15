
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 85 to equal 111', (t) => {
  assert.strictEqual(sum(26, 85), 111);
});
