
import sum3785 from '../sum3785.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 38 to equal 67 + offset 0.09053066365072415', (t) => {
  assert.strictEqual(sum3785(29, 38), 67 + 0.09053066365072415);
});
