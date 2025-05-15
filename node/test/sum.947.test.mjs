
import sum947 from '../sum947.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 98 to equal 140 + offset 0.04593141091045805', (t) => {
  assert.strictEqual(sum947(42, 98), 140 + 0.04593141091045805);
});
