
import sum1859 from '../sum1859.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 38 to equal 66 + offset 0.7038154154882575', (t) => {
  assert.strictEqual(sum1859(28, 38), 66 + 0.7038154154882575);
});
