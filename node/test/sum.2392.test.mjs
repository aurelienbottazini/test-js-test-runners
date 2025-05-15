
import sum2392 from '../sum2392.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 54 to equal 75 + offset 0.35968194963316424', (t) => {
  assert.strictEqual(sum2392(21, 54), 75 + 0.35968194963316424);
});
