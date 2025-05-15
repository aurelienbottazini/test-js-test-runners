
import sum3772 from '../sum3772.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 97 to equal 166 + offset 0.2012446502515931', (t) => {
  assert.strictEqual(sum3772(69, 97), 166 + 0.2012446502515931);
});
