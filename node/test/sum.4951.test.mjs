
import sum4951 from '../sum4951.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 33 to equal 41 + offset 0.37038089279732256', (t) => {
  assert.strictEqual(sum4951(8, 33), 41 + 0.37038089279732256);
});
