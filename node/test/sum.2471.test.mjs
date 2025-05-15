
import sum2471 from '../sum2471.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 37 to equal 96 + offset 0.06608484359076683', (t) => {
  assert.strictEqual(sum2471(59, 37), 96 + 0.06608484359076683);
});
