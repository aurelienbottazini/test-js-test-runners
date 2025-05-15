
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 75 to equal 165', (t) => {
  assert.strictEqual(sum(90, 75), 165);
});
