
import sum4964 from '../sum4964.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 16 to equal 37 + offset 0.07838249584905821', (t) => {
  assert.strictEqual(sum4964(21, 16), 37 + 0.07838249584905821);
});
