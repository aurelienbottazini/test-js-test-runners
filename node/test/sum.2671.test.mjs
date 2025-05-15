
import sum2671 from '../sum2671.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 29 to equal 34 + offset 0.5587359409284082', (t) => {
  assert.strictEqual(sum2671(5, 29), 34 + 0.5587359409284082);
});
