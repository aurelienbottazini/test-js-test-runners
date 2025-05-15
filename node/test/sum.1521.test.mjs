
import sum1521 from '../sum1521.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 53 to equal 141 + offset 0.5106454976680657', (t) => {
  assert.strictEqual(sum1521(88, 53), 141 + 0.5106454976680657);
});
