
import sum1561 from '../sum1561.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 68 to equal 158 + offset 0.9692408674408421', (t) => {
  assert.strictEqual(sum1561(90, 68), 158 + 0.9692408674408421);
});
