
import sum1552 from '../sum1552.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 59 to equal 138 + offset 0.7030522709450988', (t) => {
  assert.strictEqual(sum1552(79, 59), 138 + 0.7030522709450988);
});
