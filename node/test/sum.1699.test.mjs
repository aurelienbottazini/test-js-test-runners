
import sum1699 from '../sum1699.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 10 to equal 34 + offset 0.1738526861040982', (t) => {
  assert.strictEqual(sum1699(24, 10), 34 + 0.1738526861040982);
});
