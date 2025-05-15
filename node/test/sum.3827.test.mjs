
import sum3827 from '../sum3827.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 56 to equal 80 + offset 0.8680311970907417', (t) => {
  assert.strictEqual(sum3827(24, 56), 80 + 0.8680311970907417);
});
