
import sum2253 from '../sum2253.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 60 to equal 111 + offset 0.5652484336478857', (t) => {
  assert.strictEqual(sum2253(51, 60), 111 + 0.5652484336478857);
});
