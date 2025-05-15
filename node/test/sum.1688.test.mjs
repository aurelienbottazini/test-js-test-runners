
import sum1688 from '../sum1688.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 33 to equal 89 + offset 0.7478420018047145', (t) => {
  assert.strictEqual(sum1688(56, 33), 89 + 0.7478420018047145);
});
