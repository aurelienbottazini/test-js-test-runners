
import sum4919 from '../sum4919.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 10 to equal 84 + offset 0.8475792998976448', (t) => {
  assert.strictEqual(sum4919(74, 10), 84 + 0.8475792998976448);
});
