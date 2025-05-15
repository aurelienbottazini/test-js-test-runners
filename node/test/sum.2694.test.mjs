
import sum2694 from '../sum2694.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 42 to equal 56 + offset 0.9948005339626699', (t) => {
  assert.strictEqual(sum2694(14, 42), 56 + 0.9948005339626699);
});
