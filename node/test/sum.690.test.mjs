
import sum690 from '../sum690.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 18 to equal 61 + offset 0.25399243884123857', (t) => {
  assert.strictEqual(sum690(43, 18), 61 + 0.25399243884123857);
});
