
import sum4013 from '../sum4013.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 55 to equal 70 + offset 0.9822554972836381', (t) => {
  assert.strictEqual(sum4013(15, 55), 70 + 0.9822554972836381);
});
