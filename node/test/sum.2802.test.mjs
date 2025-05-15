
import sum2802 from '../sum2802.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 95 to equal 163 + offset 0.8634652528782698', (t) => {
  assert.strictEqual(sum2802(68, 95), 163 + 0.8634652528782698);
});
