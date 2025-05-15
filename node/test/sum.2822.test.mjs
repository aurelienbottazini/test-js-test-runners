
import sum2822 from '../sum2822.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 99 to equal 188 + offset 0.848344058731477', (t) => {
  assert.strictEqual(sum2822(89, 99), 188 + 0.848344058731477);
});
