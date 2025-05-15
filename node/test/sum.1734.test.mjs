
import sum1734 from '../sum1734.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 28 to equal 94 + offset 0.2051868252077389', (t) => {
  assert.strictEqual(sum1734(66, 28), 94 + 0.2051868252077389);
});
