
import sum2705 from '../sum2705.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 37 to equal 123 + offset 0.43342135195886144', (t) => {
  assert.strictEqual(sum2705(86, 37), 123 + 0.43342135195886144);
});
