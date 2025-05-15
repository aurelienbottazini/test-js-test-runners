
import sum1776 from '../sum1776.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 63 to equal 144 + offset 0.29246308274226596', (t) => {
  assert.strictEqual(sum1776(81, 63), 144 + 0.29246308274226596);
});
