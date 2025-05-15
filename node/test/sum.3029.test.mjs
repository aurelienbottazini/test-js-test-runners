
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 78 to equal 172', (t) => {
  assert.strictEqual(sum(94, 78), 172);
});
