
import sum1465 from '../sum1465.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 74 to equal 154 + offset 0.35625042407002905', (t) => {
  assert.strictEqual(sum1465(80, 74), 154 + 0.35625042407002905);
});
