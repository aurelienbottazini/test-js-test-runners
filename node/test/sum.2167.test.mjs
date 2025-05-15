
import sum2167 from '../sum2167.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 41 to equal 69 + offset 0.9605691240948503', (t) => {
  assert.strictEqual(sum2167(28, 41), 69 + 0.9605691240948503);
});
