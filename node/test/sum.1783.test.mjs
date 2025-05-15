
import sum1783 from '../sum1783.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 11 to equal 62 + offset 0.3124968808273314', (t) => {
  assert.strictEqual(sum1783(51, 11), 62 + 0.3124968808273314);
});
