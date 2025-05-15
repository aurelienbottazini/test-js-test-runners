
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 41 to equal 131', (t) => {
  assert.strictEqual(sum(90, 41), 131);
});
