
import sum1807 from '../sum1807.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 28 to equal 52 + offset 0.9379711778462114', (t) => {
  assert.strictEqual(sum1807(24, 28), 52 + 0.9379711778462114);
});
