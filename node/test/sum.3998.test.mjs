
import sum3998 from '../sum3998.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 13 to equal 47 + offset 0.8508183526667877', (t) => {
  assert.strictEqual(sum3998(34, 13), 47 + 0.8508183526667877);
});
