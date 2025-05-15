
import sum1684 from '../sum1684.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 72 to equal 96 + offset 0.35102937957110014', (t) => {
  assert.strictEqual(sum1684(24, 72), 96 + 0.35102937957110014);
});
