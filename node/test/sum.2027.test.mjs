
import sum2027 from '../sum2027.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 42 to equal 68 + offset 0.08022776042601865', (t) => {
  assert.strictEqual(sum2027(26, 42), 68 + 0.08022776042601865);
});
