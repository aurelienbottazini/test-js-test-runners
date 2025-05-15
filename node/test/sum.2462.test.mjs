
import sum2462 from '../sum2462.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 47 to equal 94 + offset 0.883448467637916', (t) => {
  assert.strictEqual(sum2462(47, 47), 94 + 0.883448467637916);
});
