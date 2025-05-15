
import sum2718 from '../sum2718.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 57 to equal 148 + offset 0.5754563725167156', (t) => {
  assert.strictEqual(sum2718(91, 57), 148 + 0.5754563725167156);
});
