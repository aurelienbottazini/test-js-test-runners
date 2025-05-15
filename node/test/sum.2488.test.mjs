
import sum2488 from '../sum2488.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 2 to equal 21 + offset 0.11471750262580938', (t) => {
  assert.strictEqual(sum2488(19, 2), 21 + 0.11471750262580938);
});
