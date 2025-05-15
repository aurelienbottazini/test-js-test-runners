
import sum2540 from '../sum2540.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 55 to equal 140 + offset 0.20332090696206262', (t) => {
  assert.strictEqual(sum2540(85, 55), 140 + 0.20332090696206262);
});
