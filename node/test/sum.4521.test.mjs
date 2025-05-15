
import sum4521 from '../sum4521.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 49 to equal 101 + offset 0.8694206661902738', (t) => {
  assert.strictEqual(sum4521(52, 49), 101 + 0.8694206661902738);
});
