
import sum1604 from '../sum1604.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 88 to equal 181 + offset 0.21859422069014156', (t) => {
  assert.strictEqual(sum1604(93, 88), 181 + 0.21859422069014156);
});
