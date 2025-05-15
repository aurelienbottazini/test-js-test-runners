
import sum4143 from '../sum4143.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 32 to equal 47 + offset 0.3672456917358832', (t) => {
  assert.strictEqual(sum4143(15, 32), 47 + 0.3672456917358832);
});
