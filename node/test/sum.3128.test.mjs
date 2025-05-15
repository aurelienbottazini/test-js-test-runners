
import sum3128 from '../sum3128.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 82 to equal 147 + offset 0.010186609345613773', (t) => {
  assert.strictEqual(sum3128(65, 82), 147 + 0.010186609345613773);
});
