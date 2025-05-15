
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 97 + 75 to equal 172', (t) => {
  assert.strictEqual(sum(97, 75), 172);
});
