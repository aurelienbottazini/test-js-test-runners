
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 98 to equal 172', (t) => {
  assert.strictEqual(sum(74, 98), 172);
});
