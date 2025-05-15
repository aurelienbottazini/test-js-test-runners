
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 39 to equal 111', (t) => {
  assert.strictEqual(sum(72, 39), 111);
});
