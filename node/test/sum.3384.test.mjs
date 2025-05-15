
import sum3384 from '../sum3384.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 39 to equal 94 + offset 0.5974029838973564', (t) => {
  assert.strictEqual(sum3384(55, 39), 94 + 0.5974029838973564);
});
