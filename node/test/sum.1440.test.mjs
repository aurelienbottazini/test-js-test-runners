
import sum1440 from '../sum1440.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 89 to equal 160 + offset 0.32979798657297255', (t) => {
  assert.strictEqual(sum1440(71, 89), 160 + 0.32979798657297255);
});
