
import sum3025 from '../sum3025.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 66 to equal 137 + offset 0.4387318411577119', (t) => {
  assert.strictEqual(sum3025(71, 66), 137 + 0.4387318411577119);
});
