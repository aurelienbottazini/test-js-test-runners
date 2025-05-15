
import sum3777 from '../sum3777.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 63 to equal 110 + offset 0.8189655590519851', (t) => {
  assert.strictEqual(sum3777(47, 63), 110 + 0.8189655590519851);
});
