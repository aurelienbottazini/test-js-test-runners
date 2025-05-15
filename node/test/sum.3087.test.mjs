
import sum3087 from '../sum3087.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 80 to equal 175 + offset 0.8012893152170345', (t) => {
  assert.strictEqual(sum3087(95, 80), 175 + 0.8012893152170345);
});
