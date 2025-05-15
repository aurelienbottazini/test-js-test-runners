
import sum1384 from '../sum1384.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 48 to equal 98 + offset 0.06480621495397354', (t) => {
  assert.strictEqual(sum1384(50, 48), 98 + 0.06480621495397354);
});
