
import sum3159 from '../sum3159.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 31 to equal 112 + offset 0.33785543916973415', (t) => {
  assert.strictEqual(sum3159(81, 31), 112 + 0.33785543916973415);
});
