
import sum1107 from '../sum1107.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 38 to equal 126 + offset 0.3972453957828539', (t) => {
  assert.strictEqual(sum1107(88, 38), 126 + 0.3972453957828539);
});
