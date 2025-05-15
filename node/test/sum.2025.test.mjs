
import sum2025 from '../sum2025.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 39 to equal 105 + offset 0.5811689318052249', (t) => {
  assert.strictEqual(sum2025(66, 39), 105 + 0.5811689318052249);
});
