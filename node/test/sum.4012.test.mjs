
import sum4012 from '../sum4012.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 80 to equal 122 + offset 0.033641658585919165', (t) => {
  assert.strictEqual(sum4012(42, 80), 122 + 0.033641658585919165);
});
