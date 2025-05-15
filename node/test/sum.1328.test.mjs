
import sum1328 from '../sum1328.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 37 to equal 58 + offset 0.8237881335669027', (t) => {
  assert.strictEqual(sum1328(21, 37), 58 + 0.8237881335669027);
});
