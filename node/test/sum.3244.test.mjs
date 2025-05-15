
import sum3244 from '../sum3244.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 2 to equal 101 + offset 0.7406510431964349', (t) => {
  assert.strictEqual(sum3244(99, 2), 101 + 0.7406510431964349);
});
