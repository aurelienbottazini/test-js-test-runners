
import sum2455 from '../sum2455.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 80 to equal 178 + offset 0.16436542434065093', (t) => {
  assert.strictEqual(sum2455(98, 80), 178 + 0.16436542434065093);
});
