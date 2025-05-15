
import sum4529 from '../sum4529.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 88 to equal 107 + offset 0.009309865757806457', (t) => {
  assert.strictEqual(sum4529(19, 88), 107 + 0.009309865757806457);
});
