
import sum1340 from '../sum1340.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 98 to equal 185 + offset 0.2670296847772945', (t) => {
  assert.strictEqual(sum1340(87, 98), 185 + 0.2670296847772945);
});
