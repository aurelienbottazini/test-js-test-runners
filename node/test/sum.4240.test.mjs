
import sum4240 from '../sum4240.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 28 to equal 46 + offset 0.23287980152477095', (t) => {
  assert.strictEqual(sum4240(18, 28), 46 + 0.23287980152477095);
});
