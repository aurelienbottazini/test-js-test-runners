
import sum1959 from '../sum1959.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 8 to equal 78 + offset 0.32692467469787156', (t) => {
  assert.strictEqual(sum1959(70, 8), 78 + 0.32692467469787156);
});
