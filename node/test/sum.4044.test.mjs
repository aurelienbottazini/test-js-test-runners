
import sum4044 from '../sum4044.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 75 to equal 93 + offset 0.20960781233566483', (t) => {
  assert.strictEqual(sum4044(18, 75), 93 + 0.20960781233566483);
});
