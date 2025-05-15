
import sum4991 from '../sum4991.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 56 to equal 135 + offset 0.6111241310418954', (t) => {
  assert.strictEqual(sum4991(79, 56), 135 + 0.6111241310418954);
});
