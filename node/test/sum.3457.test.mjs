
import sum3457 from '../sum3457.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 40 to equal 60 + offset 0.6038149342471635', (t) => {
  assert.strictEqual(sum3457(20, 40), 60 + 0.6038149342471635);
});
