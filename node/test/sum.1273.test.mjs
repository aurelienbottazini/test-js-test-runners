
import sum1273 from '../sum1273.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 41 to equal 113 + offset 0.5424280590589571', (t) => {
  assert.strictEqual(sum1273(72, 41), 113 + 0.5424280590589571);
});
