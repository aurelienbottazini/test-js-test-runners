
import sum1778 from '../sum1778.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 88 to equal 94 + offset 0.42667443965016216', (t) => {
  assert.strictEqual(sum1778(6, 88), 94 + 0.42667443965016216);
});
