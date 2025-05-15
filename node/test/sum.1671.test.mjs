
import sum1671 from '../sum1671.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 3 to equal 10 + offset 0.8730458940140076', (t) => {
  assert.strictEqual(sum1671(7, 3), 10 + 0.8730458940140076);
});
