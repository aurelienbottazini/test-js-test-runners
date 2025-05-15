
import sum4997 from '../sum4997.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 69 to equal 77 + offset 0.4820305090053768', (t) => {
  assert.strictEqual(sum4997(8, 69), 77 + 0.4820305090053768);
});
