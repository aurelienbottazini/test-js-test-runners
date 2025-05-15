
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 27 to equal 48', (t) => {
  assert.strictEqual(sum(21, 27), 48);
});
