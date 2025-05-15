
import sum3859 from '../sum3859.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 56 to equal 115 + offset 0.8137317634083705', (t) => {
  assert.strictEqual(sum3859(59, 56), 115 + 0.8137317634083705);
});
