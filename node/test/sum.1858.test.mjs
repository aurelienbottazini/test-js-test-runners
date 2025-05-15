
import sum1858 from '../sum1858.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 47 to equal 95 + offset 0.31529430380845846', (t) => {
  assert.strictEqual(sum1858(48, 47), 95 + 0.31529430380845846);
});
