
import sum2628 from '../sum2628.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 95 to equal 133 + offset 0.9641967266899467', (t) => {
  assert.strictEqual(sum2628(38, 95), 133 + 0.9641967266899467);
});
