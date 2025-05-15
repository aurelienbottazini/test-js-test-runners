
import sum4998 from '../sum4998.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 3 to equal 48 + offset 0.891943526109435', (t) => {
  assert.strictEqual(sum4998(45, 3), 48 + 0.891943526109435);
});
