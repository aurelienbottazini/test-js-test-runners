
import sum1050 from '../sum1050.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 32 to equal 76 + offset 0.4484586722315598', (t) => {
  assert.strictEqual(sum1050(44, 32), 76 + 0.4484586722315598);
});
