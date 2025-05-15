
import sum4303 from '../sum4303.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 4 to equal 30 + offset 0.45308235098290195', (t) => {
  assert.strictEqual(sum4303(26, 4), 30 + 0.45308235098290195);
});
