
import sum632 from '../sum632.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 3 to equal 25 + offset 0.12515296008739607', (t) => {
  assert.strictEqual(sum632(22, 3), 25 + 0.12515296008739607);
});
