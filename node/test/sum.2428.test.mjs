
import sum2428 from '../sum2428.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 79 to equal 103 + offset 0.12708173190483163', (t) => {
  assert.strictEqual(sum2428(24, 79), 103 + 0.12708173190483163);
});
