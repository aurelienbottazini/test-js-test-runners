
import sum2496 from '../sum2496.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 19 to equal 67 + offset 0.3366514585602187', (t) => {
  assert.strictEqual(sum2496(48, 19), 67 + 0.3366514585602187);
});
