
import sum4233 from '../sum4233.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 42 to equal 51 + offset 0.14222744914461394', (t) => {
  assert.strictEqual(sum4233(9, 42), 51 + 0.14222744914461394);
});
