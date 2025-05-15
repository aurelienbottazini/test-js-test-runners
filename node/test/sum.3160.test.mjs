
import sum3160 from '../sum3160.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 79 to equal 165 + offset 0.8585644734149069', (t) => {
  assert.strictEqual(sum3160(86, 79), 165 + 0.8585644734149069);
});
