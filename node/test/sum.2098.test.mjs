
import sum2098 from '../sum2098.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 81 to equal 172 + offset 0.8204057105623126', (t) => {
  assert.strictEqual(sum2098(91, 81), 172 + 0.8204057105623126);
});
