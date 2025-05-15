
import sum1730 from '../sum1730.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 42 to equal 94 + offset 0.8018633303110504', (t) => {
  assert.strictEqual(sum1730(52, 42), 94 + 0.8018633303110504);
});
