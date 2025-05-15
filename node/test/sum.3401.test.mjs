
import sum3401 from '../sum3401.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 22 to equal 77 + offset 0.5872681300048201', (t) => {
  assert.strictEqual(sum3401(55, 22), 77 + 0.5872681300048201);
});
