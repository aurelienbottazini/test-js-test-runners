
import sum414 from '../sum414.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 6 to equal 93 + offset 0.7209563805876036', (t) => {
  assert.strictEqual(sum414(87, 6), 93 + 0.7209563805876036);
});
