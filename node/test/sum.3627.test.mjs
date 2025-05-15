
import sum3627 from '../sum3627.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 60 to equal 67 + offset 0.33091781709164636', (t) => {
  assert.strictEqual(sum3627(7, 60), 67 + 0.33091781709164636);
});
