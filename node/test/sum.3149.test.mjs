
import sum3149 from '../sum3149.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 10 to equal 18 + offset 0.6224175183893891', (t) => {
  assert.strictEqual(sum3149(8, 10), 18 + 0.6224175183893891);
});
