
import sum2450 from '../sum2450.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 81 to equal 146 + offset 0.04935484898017073', (t) => {
  assert.strictEqual(sum2450(65, 81), 146 + 0.04935484898017073);
});
