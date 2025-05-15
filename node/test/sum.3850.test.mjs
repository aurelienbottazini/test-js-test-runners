
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 52 to equal 149', (t) => {
  assert.strictEqual(sum(97, 52), 149);
});
