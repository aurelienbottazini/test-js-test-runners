
import sum3917 from '../sum3917.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 78 to equal 120 + offset 0.5569132770055003', (t) => {
  assert.strictEqual(sum3917(42, 78), 120 + 0.5569132770055003);
});
