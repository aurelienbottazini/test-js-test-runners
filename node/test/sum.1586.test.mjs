
import sum1586 from '../sum1586.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 19 to equal 43 + offset 0.01504171497017659', (t) => {
  assert.strictEqual(sum1586(24, 19), 43 + 0.01504171497017659);
});
