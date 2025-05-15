
import sum1274 from '../sum1274.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 21 to equal 62 + offset 0.4037663021917456', (t) => {
  assert.strictEqual(sum1274(41, 21), 62 + 0.4037663021917456);
});
