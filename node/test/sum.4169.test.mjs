
import sum4169 from '../sum4169.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 55 to equal 131 + offset 0.6617412436162154', (t) => {
  assert.strictEqual(sum4169(76, 55), 131 + 0.6617412436162154);
});
