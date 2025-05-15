
import sum3494 from '../sum3494.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 41 to equal 118 + offset 0.6674352907351176', (t) => {
  assert.strictEqual(sum3494(77, 41), 118 + 0.6674352907351176);
});
