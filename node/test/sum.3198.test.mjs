
import sum3198 from '../sum3198.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 64 to equal 124 + offset 0.3702412107647356', (t) => {
  assert.strictEqual(sum3198(60, 64), 124 + 0.3702412107647356);
});
