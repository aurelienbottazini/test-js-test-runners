
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 27 to equal 81', (t) => {
  assert.strictEqual(sum(54, 27), 81);
});
