
import sum4272 from '../sum4272.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 68 to equal 166 + offset 0.2952063196548882', (t) => {
  assert.strictEqual(sum4272(98, 68), 166 + 0.2952063196548882);
});
