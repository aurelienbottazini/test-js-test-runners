
import sum3007 from '../sum3007.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 5 to equal 66 + offset 0.8004777867534703', (t) => {
  assert.strictEqual(sum3007(61, 5), 66 + 0.8004777867534703);
});
