
import sum1972 from '../sum1972.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 49 to equal 101 + offset 0.8887773874647841', (t) => {
  assert.strictEqual(sum1972(52, 49), 101 + 0.8887773874647841);
});
