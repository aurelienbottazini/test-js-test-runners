
import sum3440 from '../sum3440.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 1 to equal 27 + offset 0.5558583509661779', (t) => {
  assert.strictEqual(sum3440(26, 1), 27 + 0.5558583509661779);
});
