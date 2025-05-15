
import sum3011 from '../sum3011.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 31 to equal 39 + offset 0.5352569585223204', (t) => {
  assert.strictEqual(sum3011(8, 31), 39 + 0.5352569585223204);
});
