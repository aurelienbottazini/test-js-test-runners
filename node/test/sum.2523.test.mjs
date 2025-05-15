
import sum2523 from '../sum2523.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 18 to equal 51 + offset 0.8111522987298224', (t) => {
  assert.strictEqual(sum2523(33, 18), 51 + 0.8111522987298224);
});
