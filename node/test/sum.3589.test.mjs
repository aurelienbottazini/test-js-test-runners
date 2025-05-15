
import sum3589 from '../sum3589.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 96 to equal 189 + offset 0.8091998966125596', (t) => {
  assert.strictEqual(sum3589(93, 96), 189 + 0.8091998966125596);
});
