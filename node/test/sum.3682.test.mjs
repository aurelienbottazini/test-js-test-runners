
import sum3682 from '../sum3682.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 28 to equal 77 + offset 0.9390893900571036', (t) => {
  assert.strictEqual(sum3682(49, 28), 77 + 0.9390893900571036);
});
