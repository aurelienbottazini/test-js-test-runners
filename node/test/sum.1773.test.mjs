
import sum1773 from '../sum1773.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 5 to equal 51 + offset 0.7028799976904041', (t) => {
  assert.strictEqual(sum1773(46, 5), 51 + 0.7028799976904041);
});
