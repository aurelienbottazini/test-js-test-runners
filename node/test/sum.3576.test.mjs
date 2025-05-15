
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 48 + 84 to equal 132', (t) => {
  assert.strictEqual(sum(48, 84), 132);
});
