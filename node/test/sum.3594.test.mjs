
import sum3594 from '../sum3594.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 43 to equal 99 + offset 0.9949672223978223', (t) => {
  assert.strictEqual(sum3594(56, 43), 99 + 0.9949672223978223);
});
