
import sum4741 from '../sum4741.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 57 to equal 89 + offset 0.912768386668126', (t) => {
  assert.strictEqual(sum4741(32, 57), 89 + 0.912768386668126);
});
