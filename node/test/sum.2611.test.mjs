
import sum2611 from '../sum2611.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 45 to equal 143 + offset 0.8359082167764441', (t) => {
  assert.strictEqual(sum2611(98, 45), 143 + 0.8359082167764441);
});
