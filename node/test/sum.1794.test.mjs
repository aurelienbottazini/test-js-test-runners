
import sum1794 from '../sum1794.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 52 to equal 55 + offset 0.8071502755241082', (t) => {
  assert.strictEqual(sum1794(3, 52), 55 + 0.8071502755241082);
});
