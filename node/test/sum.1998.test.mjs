
import sum1998 from '../sum1998.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 25 to equal 93 + offset 0.10147749919369353', (t) => {
  assert.strictEqual(sum1998(68, 25), 93 + 0.10147749919369353);
});
