
import sum1568 from '../sum1568.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 46 to equal 57 + offset 0.5114284650663594', (t) => {
  assert.strictEqual(sum1568(11, 46), 57 + 0.5114284650663594);
});
