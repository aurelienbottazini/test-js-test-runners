
import sum2557 from '../sum2557.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 53 to equal 120 + offset 0.3690366136451061', (t) => {
  assert.strictEqual(sum2557(67, 53), 120 + 0.3690366136451061);
});
