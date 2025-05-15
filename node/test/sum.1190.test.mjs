
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 96 + 69 to equal 165', (t) => {
  assert.strictEqual(sum(96, 69), 165);
});
