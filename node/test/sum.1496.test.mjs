
import sum1496 from '../sum1496.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 0 to equal 74 + offset 0.7631097435489984', (t) => {
  assert.strictEqual(sum1496(74, 0), 74 + 0.7631097435489984);
});
