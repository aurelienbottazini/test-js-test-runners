
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 74 to equal 172', (t) => {
  assert.strictEqual(sum(98, 74), 172);
});
