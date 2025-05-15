
import sum1408 from '../sum1408.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 48 to equal 66 + offset 0.8824598431225454', (t) => {
  assert.strictEqual(sum1408(18, 48), 66 + 0.8824598431225454);
});
