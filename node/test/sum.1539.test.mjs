
import sum1539 from '../sum1539.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 34 to equal 43 + offset 0.21125143341320984', (t) => {
  assert.strictEqual(sum1539(9, 34), 43 + 0.21125143341320984);
});
