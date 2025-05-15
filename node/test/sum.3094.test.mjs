
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 72 to equal 165', (t) => {
  assert.strictEqual(sum(93, 72), 165);
});
