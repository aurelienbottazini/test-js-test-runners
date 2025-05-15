
import sum4709 from '../sum4709.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 51 to equal 90 + offset 0.3491462153707703', (t) => {
  assert.strictEqual(sum4709(39, 51), 90 + 0.3491462153707703);
});
