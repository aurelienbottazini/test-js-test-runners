
import sum1323 from '../sum1323.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 14 to equal 73 + offset 0.5167672893252863', (t) => {
  assert.strictEqual(sum1323(59, 14), 73 + 0.5167672893252863);
});
