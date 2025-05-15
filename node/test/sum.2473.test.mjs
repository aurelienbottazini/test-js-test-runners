
import sum2473 from '../sum2473.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 24 to equal 76 + offset 0.7017543362743183', (t) => {
  assert.strictEqual(sum2473(52, 24), 76 + 0.7017543362743183);
});
