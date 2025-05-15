
import sum1282 from '../sum1282.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 64 to equal 104 + offset 0.18670319168236638', (t) => {
  assert.strictEqual(sum1282(40, 64), 104 + 0.18670319168236638);
});
