
import sum4016 from '../sum4016.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 1 to equal 72 + offset 0.32344172940856586', (t) => {
  assert.strictEqual(sum4016(71, 1), 72 + 0.32344172940856586);
});
