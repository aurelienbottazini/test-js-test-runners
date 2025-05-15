
import sum1486 from '../sum1486.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 28 to equal 86 + offset 0.8796843585360091', (t) => {
  assert.strictEqual(sum1486(58, 28), 86 + 0.8796843585360091);
});
