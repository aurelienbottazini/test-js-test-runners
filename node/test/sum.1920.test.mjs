
import sum1920 from '../sum1920.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 16 to equal 21 + offset 0.5014630133465219', (t) => {
  assert.strictEqual(sum1920(5, 16), 21 + 0.5014630133465219);
});
