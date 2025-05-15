
import sum1655 from '../sum1655.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 94 to equal 157 + offset 0.681113956580665', (t) => {
  assert.strictEqual(sum1655(63, 94), 157 + 0.681113956580665);
});
