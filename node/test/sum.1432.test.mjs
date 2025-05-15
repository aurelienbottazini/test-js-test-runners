
import sum1432 from '../sum1432.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 88 to equal 123 + offset 0.5525015842789079', (t) => {
  assert.strictEqual(sum1432(35, 88), 123 + 0.5525015842789079);
});
