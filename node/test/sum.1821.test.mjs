
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 77 to equal 165', (t) => {
  assert.strictEqual(sum(88, 77), 165);
});
