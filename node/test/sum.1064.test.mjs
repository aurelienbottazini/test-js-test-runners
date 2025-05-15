
import sum1064 from '../sum1064.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 28 to equal 58 + offset 0.8485854707243865', (t) => {
  assert.strictEqual(sum1064(30, 28), 58 + 0.8485854707243865);
});
