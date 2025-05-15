
import sum3034 from '../sum3034.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 46 to equal 133 + offset 0.97465645327765', (t) => {
  assert.strictEqual(sum3034(87, 46), 133 + 0.97465645327765);
});
