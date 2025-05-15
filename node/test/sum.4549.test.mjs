
import sum4549 from '../sum4549.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 32 to equal 38 + offset 0.4141348021130139', (t) => {
  assert.strictEqual(sum4549(6, 32), 38 + 0.4141348021130139);
});
