
import sum862 from '../sum862.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 31 to equal 38 + offset 0.19427841328149265', (t) => {
  assert.strictEqual(sum862(7, 31), 38 + 0.19427841328149265);
});
