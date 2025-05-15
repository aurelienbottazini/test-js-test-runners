
import sum219 from '../sum219.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 50 to equal 108 + offset 0.5592337377575308', (t) => {
  assert.strictEqual(sum219(58, 50), 108 + 0.5592337377575308);
});
