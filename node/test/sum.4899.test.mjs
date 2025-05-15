
import sum4899 from '../sum4899.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 44 to equal 93 + offset 0.6659380969940051', (t) => {
  assert.strictEqual(sum4899(49, 44), 93 + 0.6659380969940051);
});
