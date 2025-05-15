
import sum4338 from '../sum4338.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 4 to equal 45 + offset 0.344916729159802', (t) => {
  assert.strictEqual(sum4338(41, 4), 45 + 0.344916729159802);
});
