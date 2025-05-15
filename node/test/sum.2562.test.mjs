
import sum2562 from '../sum2562.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 80 to equal 169 + offset 0.7985547636037449', (t) => {
  assert.strictEqual(sum2562(89, 80), 169 + 0.7985547636037449);
});
