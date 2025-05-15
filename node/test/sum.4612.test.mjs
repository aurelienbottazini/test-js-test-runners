
import sum4612 from '../sum4612.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 14 to equal 24 + offset 0.6113711150347304', (t) => {
  assert.strictEqual(sum4612(10, 14), 24 + 0.6113711150347304);
});
