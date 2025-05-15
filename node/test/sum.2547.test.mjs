
import sum2547 from '../sum2547.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 28 to equal 112 + offset 0.700665132155724', (t) => {
  assert.strictEqual(sum2547(84, 28), 112 + 0.700665132155724);
});
