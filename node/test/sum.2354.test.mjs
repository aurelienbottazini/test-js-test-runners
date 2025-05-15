
import sum2354 from '../sum2354.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 11 to equal 72 + offset 0.4786254137108672', (t) => {
  assert.strictEqual(sum2354(61, 11), 72 + 0.4786254137108672);
});
