
import sum782 from '../sum782.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 70 to equal 103 + offset 0.592602544568607', (t) => {
  assert.strictEqual(sum782(33, 70), 103 + 0.592602544568607);
});
