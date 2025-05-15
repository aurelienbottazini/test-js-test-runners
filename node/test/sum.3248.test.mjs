
import sum3248 from '../sum3248.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 29 to equal 35 + offset 0.4588772287284466', (t) => {
  assert.strictEqual(sum3248(6, 29), 35 + 0.4588772287284466);
});
