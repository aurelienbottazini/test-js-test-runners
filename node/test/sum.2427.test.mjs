
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 84 to equal 165', (t) => {
  assert.strictEqual(sum(81, 84), 165);
});
