
import sum2648 from '../sum2648.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 6 to equal 87 + offset 0.5817913162800381', (t) => {
  assert.strictEqual(sum2648(81, 6), 87 + 0.5817913162800381);
});
