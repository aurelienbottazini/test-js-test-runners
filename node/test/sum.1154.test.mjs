
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 84 to equal 172', (t) => {
  assert.strictEqual(sum(88, 84), 172);
});
