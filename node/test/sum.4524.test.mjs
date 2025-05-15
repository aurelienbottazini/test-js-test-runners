
import sum4524 from '../sum4524.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 20 to equal 90 + offset 0.7285852715086882', (t) => {
  assert.strictEqual(sum4524(70, 20), 90 + 0.7285852715086882);
});
