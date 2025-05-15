
import sum1553 from '../sum1553.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 68 to equal 82 + offset 0.16412683127074346', (t) => {
  assert.strictEqual(sum1553(14, 68), 82 + 0.16412683127074346);
});
