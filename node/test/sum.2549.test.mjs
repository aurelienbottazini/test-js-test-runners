
import sum2549 from '../sum2549.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 56 to equal 65 + offset 0.9923253612119349', (t) => {
  assert.strictEqual(sum2549(9, 56), 65 + 0.9923253612119349);
});
