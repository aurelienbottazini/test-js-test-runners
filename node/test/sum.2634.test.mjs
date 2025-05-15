
import sum2634 from '../sum2634.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 45 to equal 80 + offset 0.7535433694148451', (t) => {
  assert.strictEqual(sum2634(35, 45), 80 + 0.7535433694148451);
});
