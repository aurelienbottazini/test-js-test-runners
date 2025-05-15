
import sum3182 from '../sum3182.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 78 to equal 129 + offset 0.07182483023542119', (t) => {
  assert.strictEqual(sum3182(51, 78), 129 + 0.07182483023542119);
});
