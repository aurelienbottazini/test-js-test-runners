
import sum4422 from '../sum4422.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 69 to equal 145 + offset 0.7743464345873733', (t) => {
  assert.strictEqual(sum4422(76, 69), 145 + 0.7743464345873733);
});
