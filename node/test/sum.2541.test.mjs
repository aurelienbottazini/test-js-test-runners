
import sum2541 from '../sum2541.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 26 to equal 120 + offset 0.3981247940505338', (t) => {
  assert.strictEqual(sum2541(94, 26), 120 + 0.3981247940505338);
});
