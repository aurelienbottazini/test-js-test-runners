
import sum2337 from '../sum2337.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 60 to equal 75 + offset 0.5222294584359868', (t) => {
  assert.strictEqual(sum2337(15, 60), 75 + 0.5222294584359868);
});
