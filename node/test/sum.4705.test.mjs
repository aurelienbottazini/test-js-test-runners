
import sum4705 from '../sum4705.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 55 to equal 59 + offset 0.8110162369432827', (t) => {
  assert.strictEqual(sum4705(4, 55), 59 + 0.8110162369432827);
});
