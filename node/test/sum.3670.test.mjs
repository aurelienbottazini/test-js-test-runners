
import sum3670 from '../sum3670.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 84 to equal 179 + offset 0.27557866923903596', (t) => {
  assert.strictEqual(sum3670(95, 84), 179 + 0.27557866923903596);
});
