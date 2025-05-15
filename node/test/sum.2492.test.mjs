
import sum2492 from '../sum2492.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 80 to equal 118 + offset 0.32726621619798346', (t) => {
  assert.strictEqual(sum2492(38, 80), 118 + 0.32726621619798346);
});
