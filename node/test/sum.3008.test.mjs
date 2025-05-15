
import sum3008 from '../sum3008.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 55 to equal 141 + offset 0.035076183716601705', (t) => {
  assert.strictEqual(sum3008(86, 55), 141 + 0.035076183716601705);
});
