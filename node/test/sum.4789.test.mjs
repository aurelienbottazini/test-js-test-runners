
import sum4789 from '../sum4789.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 28 to equal 39 + offset 0.08098426476277554', (t) => {
  assert.strictEqual(sum4789(11, 28), 39 + 0.08098426476277554);
});
