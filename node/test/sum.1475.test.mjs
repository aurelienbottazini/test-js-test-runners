
import sum1475 from '../sum1475.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 72 to equal 165 + offset 0.6034053338741759', (t) => {
  assert.strictEqual(sum1475(93, 72), 165 + 0.6034053338741759);
});
