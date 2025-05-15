
import sum2827 from '../sum2827.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 36 to equal 55 + offset 0.2743765306074031', (t) => {
  assert.strictEqual(sum2827(19, 36), 55 + 0.2743765306074031);
});
