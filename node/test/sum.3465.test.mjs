
import sum3465 from '../sum3465.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 66 to equal 142 + offset 0.758397659157788', (t) => {
  assert.strictEqual(sum3465(76, 66), 142 + 0.758397659157788);
});
