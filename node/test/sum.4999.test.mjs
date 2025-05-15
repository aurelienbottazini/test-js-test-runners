
import sum4999 from '../sum4999.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 47 to equal 89 + offset 0.17457404389486808', (t) => {
  assert.strictEqual(sum4999(42, 47), 89 + 0.17457404389486808);
});
