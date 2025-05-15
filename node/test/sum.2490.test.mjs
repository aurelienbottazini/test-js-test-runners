
import sum2490 from '../sum2490.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 41 to equal 101 + offset 0.4367556111580496', (t) => {
  assert.strictEqual(sum2490(60, 41), 101 + 0.4367556111580496);
});
