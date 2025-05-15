
import sum4173 from '../sum4173.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 51 to equal 60 + offset 0.6729485023134787', (t) => {
  assert.strictEqual(sum4173(9, 51), 60 + 0.6729485023134787);
});
