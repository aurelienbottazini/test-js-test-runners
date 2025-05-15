
import sum4631 from '../sum4631.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 19 to equal 78 + offset 0.7737253216762963', (t) => {
  assert.strictEqual(sum4631(59, 19), 78 + 0.7737253216762963);
});
