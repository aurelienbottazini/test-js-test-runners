
import sum1758 from '../sum1758.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 34 to equal 35 + offset 0.39520147104145675', (t) => {
  assert.strictEqual(sum1758(1, 34), 35 + 0.39520147104145675);
});
