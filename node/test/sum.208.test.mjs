
import sum208 from '../sum208.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 21 to equal 118 + offset 0.997750186913155', (t) => {
  assert.strictEqual(sum208(97, 21), 118 + 0.997750186913155);
});
