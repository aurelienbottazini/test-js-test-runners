
import sum1196 from '../sum1196.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 82 to equal 133 + offset 0.16793101776093045', (t) => {
  assert.strictEqual(sum1196(51, 82), 133 + 0.16793101776093045);
});
