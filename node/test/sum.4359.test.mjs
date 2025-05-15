
import sum4359 from '../sum4359.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 18 to equal 110 + offset 0.8198945606585082', (t) => {
  assert.strictEqual(sum4359(92, 18), 110 + 0.8198945606585082);
});
