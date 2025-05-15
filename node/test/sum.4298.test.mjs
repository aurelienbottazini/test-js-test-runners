
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 94 to equal 165', (t) => {
  assert.strictEqual(sum(71, 94), 165);
});
