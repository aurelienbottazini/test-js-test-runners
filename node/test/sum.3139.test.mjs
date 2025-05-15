
import sum3139 from '../sum3139.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 99 to equal 126 + offset 0.5127684155928467', (t) => {
  assert.strictEqual(sum3139(27, 99), 126 + 0.5127684155928467);
});
