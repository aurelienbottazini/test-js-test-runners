
import sum392 from '../sum392.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 54 to equal 113 + offset 0.9259027213706312', (t) => {
  assert.strictEqual(sum392(59, 54), 113 + 0.9259027213706312);
});
