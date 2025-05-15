
import sum3313 from '../sum3313.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 78 to equal 170 + offset 0.3024390259402452', (t) => {
  assert.strictEqual(sum3313(92, 78), 170 + 0.3024390259402452);
});
