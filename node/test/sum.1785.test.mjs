
import sum1785 from '../sum1785.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 75 to equal 152 + offset 0.8133230011315338', (t) => {
  assert.strictEqual(sum1785(77, 75), 152 + 0.8133230011315338);
});
