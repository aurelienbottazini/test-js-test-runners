
import sum1487 from '../sum1487.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 51 to equal 146 + offset 0.39532280843264134', (t) => {
  assert.strictEqual(sum1487(95, 51), 146 + 0.39532280843264134);
});
