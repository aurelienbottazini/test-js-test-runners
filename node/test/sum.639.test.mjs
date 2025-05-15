
import sum639 from '../sum639.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 44 to equal 46 + offset 0.5249936515154998', (t) => {
  assert.strictEqual(sum639(2, 44), 46 + 0.5249936515154998);
});
