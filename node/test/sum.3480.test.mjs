
import sum3480 from '../sum3480.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 84 to equal 181 + offset 0.9284692707534683', (t) => {
  assert.strictEqual(sum3480(97, 84), 181 + 0.9284692707534683);
});
