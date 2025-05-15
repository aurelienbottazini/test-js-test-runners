
import sum2136 from '../sum2136.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 8 to equal 88 + offset 0.05887303748246264', (t) => {
  assert.strictEqual(sum2136(80, 8), 88 + 0.05887303748246264);
});
