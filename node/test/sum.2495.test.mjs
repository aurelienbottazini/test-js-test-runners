
import sum2495 from '../sum2495.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 28 to equal 126 + offset 0.41509686057949347', (t) => {
  assert.strictEqual(sum2495(98, 28), 126 + 0.41509686057949347);
});
