
import sum3897 from '../sum3897.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 20 to equal 105 + offset 0.9312198166453773', (t) => {
  assert.strictEqual(sum3897(85, 20), 105 + 0.9312198166453773);
});
