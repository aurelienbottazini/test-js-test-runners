
import sum2315 from '../sum2315.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 18 to equal 68 + offset 0.4239231064437172', (t) => {
  assert.strictEqual(sum2315(50, 18), 68 + 0.4239231064437172);
});
