
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 88 to equal 165', (t) => {
  assert.strictEqual(sum(77, 88), 165);
});
