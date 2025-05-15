
import sum4963 from '../sum4963.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 10 to equal 68 + offset 0.9195217371929701', (t) => {
  assert.strictEqual(sum4963(58, 10), 68 + 0.9195217371929701);
});
