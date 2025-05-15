
import sum1619 from '../sum1619.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 7 to equal 56 + offset 0.2925875372564073', (t) => {
  assert.strictEqual(sum1619(49, 7), 56 + 0.2925875372564073);
});
