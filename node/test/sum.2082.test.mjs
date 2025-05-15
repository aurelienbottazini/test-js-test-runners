
import sum2082 from '../sum2082.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 81 to equal 123 + offset 0.7016472925593519', (t) => {
  assert.strictEqual(sum2082(42, 81), 123 + 0.7016472925593519);
});
