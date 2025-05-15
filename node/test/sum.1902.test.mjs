
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 75 to equal 149', (t) => {
  assert.strictEqual(sum(74, 75), 149);
});
