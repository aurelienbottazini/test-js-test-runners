
import sum4091 from '../sum4091.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 41 to equal 116 + offset 0.3026879897277138', (t) => {
  assert.strictEqual(sum4091(75, 41), 116 + 0.3026879897277138);
});
