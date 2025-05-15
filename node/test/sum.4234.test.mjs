
import sum4234 from '../sum4234.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 11 to equal 81 + offset 0.7568916574898751', (t) => {
  assert.strictEqual(sum4234(70, 11), 81 + 0.7568916574898751);
});
