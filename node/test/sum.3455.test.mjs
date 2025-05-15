
import sum3455 from '../sum3455.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 1 to equal 14 + offset 0.757022604495046', (t) => {
  assert.strictEqual(sum3455(13, 1), 14 + 0.757022604495046);
});
