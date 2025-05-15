
import sum4457 from '../sum4457.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 28 to equal 101 + offset 0.10661028332333222', (t) => {
  assert.strictEqual(sum4457(73, 28), 101 + 0.10661028332333222);
});
