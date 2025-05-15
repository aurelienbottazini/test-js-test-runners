
import sum4925 from '../sum4925.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 7 to equal 101 + offset 0.7037874866499111', (t) => {
  assert.strictEqual(sum4925(94, 7), 101 + 0.7037874866499111);
});
