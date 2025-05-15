
import sum1533 from '../sum1533.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 30 to equal 39 + offset 0.7313251351566986', (t) => {
  assert.strictEqual(sum1533(9, 30), 39 + 0.7313251351566986);
});
