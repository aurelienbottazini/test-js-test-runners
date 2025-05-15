
import sum1628 from '../sum1628.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 20 to equal 114 + offset 0.8756709284632183', (t) => {
  assert.strictEqual(sum1628(94, 20), 114 + 0.8756709284632183);
});
