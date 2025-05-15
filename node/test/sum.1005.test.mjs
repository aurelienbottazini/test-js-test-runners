
import sum1005 from '../sum1005.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 94 to equal 132 + offset 0.01153380491604028', (t) => {
  assert.strictEqual(sum1005(38, 94), 132 + 0.01153380491604028);
});
