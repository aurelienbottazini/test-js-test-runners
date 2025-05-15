
import sum1460 from '../sum1460.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 25 to equal 82 + offset 0.665449320422468', (t) => {
  assert.strictEqual(sum1460(57, 25), 82 + 0.665449320422468);
});
