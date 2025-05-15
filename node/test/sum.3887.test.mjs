
import sum3887 from '../sum3887.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 12 to equal 101 + offset 0.03031921245102942', (t) => {
  assert.strictEqual(sum3887(89, 12), 101 + 0.03031921245102942);
});
