
import sum2223 from '../sum2223.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 81 to equal 139 + offset 0.8396561830575732', (t) => {
  assert.strictEqual(sum2223(58, 81), 139 + 0.8396561830575732);
});
