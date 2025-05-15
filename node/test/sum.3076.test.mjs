
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 94 to equal 191', (t) => {
  assert.strictEqual(sum(97, 94), 191);
});
